import React, { useRef, useState } from "react";
import { RefreshCw, Mic, Square, Ear, CircleCheck } from "lucide-react";
import ToolTip from "../ui/ToolTip";

export default function VoiceRecorder({ handleSetText }) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBase64, setAudioBase64] = useState(null);
  const [status, setStatus] = useState("");
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = async () => {
    try {
      setStatus("Listening");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: "audio/wav" });
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
          const base64Audio = reader.result;
          setAudioBase64(base64Audio.split(",")[1]);
          const formData = new FormData();
          formData.append("audio", base64Audio.split(",")[1]);
          setStatus("Transcribing");
          const response = await fetch("/api/transcribe", {
            method: "POST",
            body: formData,
          });
          const result = await response.json();
          console.log("Audio uploaded successfully.", result);
          handleSetText(result.result);
          setStatus("Transcribed");
        };
        chunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
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

  return (
    <main className="flex flex-row items-center justify-between gap-4">
      <div className="flex items-center justify-center gap-2">
        <button
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
        <ToolTip content="Refresh" position="top">
          <div className="p-1 bg-transparent text-white rounded-sm border-2 border-muted hover:border-[#ff0080]">
            <a href="/">
              <RefreshCw size={16} />
            </a>
          </div>
        </ToolTip>
      </div>
    </main>
  );
}
