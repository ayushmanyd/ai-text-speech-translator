import { NextResponse } from "next/server";
import translateText from "@/app/actions/gqTranslate";

export async function POST(request: Request): Promise<Response> {
  try {
    const { inputText, targetLanguage } = await request.json();

    if (!inputText || !targetLanguage) {
      return NextResponse.json(
        { error: "inputText and targetLanguage are required." },
        { status: 400 }
      );
    }

    const result = await translateText(inputText, targetLanguage);
    return NextResponse.json({ result });
  } catch (error: unknown) {
    console.error("Translation API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Translation failed" },
      { status: 500 }
    );
  }
}

