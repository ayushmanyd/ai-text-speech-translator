"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GOOGLE_GEN_AI_API_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

async function translateText(
  inputText: string,
  targetLanguage: string
): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const prompt = `Detect the language of the text and translate it into ${targetLanguage}: ${inputText}`;
  const additionalPrompt =
    "Just return the translated text. Do not add additional descriptions such as `Here are the translations`";

  try {
    const result = await model.generateContent(prompt + additionalPrompt);
    return result.response.text();
  } catch (e) {
    console.error("Gemini translation error:", e);
  }
  return "Couldn't load translations.";
}

export async function translate(
  inputText: string,
  targetLanguage: string
): Promise<string> {
  return translateText(inputText, targetLanguage);
}
