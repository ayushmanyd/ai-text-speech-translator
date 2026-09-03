import React, { useRef, useState } from "react";
import { RotateCcw, Mic, Square, Ear, CircleCheck } from "lucide-react";
import ToolTip from "../ui/ToolTip";

interface VoiceRecorderProps {
  handleSetText: (text: string) => void;
  handleReset?: () => void;
}

export default function VoiceRecorder({
  handleSetText,
  handleReset,
}: VoiceRecorderProps): React.JSX.Element {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioBase64, setAudioBase64] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      setStatus("Listening");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
          const base64Audio = typeof reader.result === "string" ? reader.result : "";
          const rawAudio = base64Audio.split(",")[1] || "";
          setAudioBase64(rawAudio);
          const formData = new FormData();
          formData.append("audio", rawAudio);
          setStatus("Transcribing");
          try {
            const response = await fetch("/api/transcribe", {
              method: "POST",
              body: formData,
            });
            const result = await response.json();
            if (result.result) {
              handleSetText(result.result);
            }
            setStatus("Transcribed");
          } catch (fetchErr) {
            console.error("Transcribe request failed:", fetchErr);
            setStatus("");
          }
        };
        chunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setStatus("");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleResetClick = () => {
    if (isRecording && mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
    setAudioBase64(null);
    setStatus("");
    if (handleReset) {
      handleReset();
    }
  };

  return (
    <main className="flex flex-row items-center justify-between gap-4">
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={toggleRecording}
          className="w-[26px] h-[26px] bg-transparent text-white rounded-sm border-2 border-muted hover:border-[#ff0080] flex items-center justify-center"
        >
          {isRecording ? (
            <ToolTip content="Stop">
              <Square size={16} className="bg-[#cf3b31] stroke-[#cf3b31] p-1" />
            </ToolTip>
          ) : (
            <ToolTip content="Mic">
              <Mic size={26} className="p-1" />
            </ToolTip>
          )}
        </button>

        <input
          type="hidden"
          name="audio"
          value={audioBase64 || ""}
          aria-label="Recorded Audio"
        />
        <div className="text-base flex items-center justify-center gap-1">
          {status}
          {status === "Listening" && <Ear size={16} />}
          {(status === "Listening" || status === "Transcribing") && (
            <img
              src="/preloaderEllipsis.svg"
              alt="Loading"
              className="w-6 h-6"
            />
          )}
          {status === "Transcribed" && (
            <CircleCheck size={16} color="#34b233" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ToolTip content="Reset" position="top">
          <button
            type="button"
            onClick={handleResetClick}
            aria-label="Reset input text"
            className="p-1 bg-transparent text-white rounded-sm border-2 border-muted hover:border-[#ff0080] flex items-center justify-center cursor-pointer transition-colors"
          >
            <RotateCcw size={16} />
          </button>
        </ToolTip>
      </div>
    </main>
  );
}
