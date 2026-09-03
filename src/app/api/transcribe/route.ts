import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();
  const audioFile = formData.get("audio") as string | null;

  if (!audioFile) {
    return Response.json({ error: "No audio file provided" }, { status: 400 });
  }

  const apiKey = process.env.GOOGLE_GEN_AI_API_KEY || "";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  try {
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "audio/wav",
          data: audioFile,
        },
      },
      { text: "Please transcribe the audio." },
    ]);

    return Response.json({ result: result.response.text() });
  } catch (e: unknown) {
    console.error("Transcribe error:", e);
    return Response.json({ error: e instanceof Error ? e.message : "Transcription failed" }, { status: 500 });
  }
}
