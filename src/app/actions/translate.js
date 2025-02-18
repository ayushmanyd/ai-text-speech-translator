"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_API_KEY);

async function translateText(inputText, targetLanguage) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Detect the language of the text and translate it into ${targetLanguage}: ${inputText}`;
  const additionalPrompt =
    "Just return the translated text. Do not add additional descriptions such as `Here are the translations`";

  try {
    const result = await model.generateContent(prompt + additionalPrompt);
    // console.log(result.response.text());
    return result.response.text();
  } catch (e) {
    console.log(e);
  }
  return "Couldn't load translations.";
}

export async function translate(inputText, targetLanguage) {
  return translateText(inputText, targetLanguage);
}
