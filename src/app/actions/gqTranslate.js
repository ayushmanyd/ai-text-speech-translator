"use server";

import Groq from "groq-sdk";

const GROQ_API_KEYS = [
  process.env.TRANSLATE_GROQ_API_KEY1,
  process.env.TRANSLATE_GROQ_API_KEY2,
  process.env.TRANSLATE_GROQ_API_KEY3,
].filter(Boolean);

export default async function translateText(inputText, targetLanguage) {
  const prompt = `Translate the text into ${targetLanguage}: ${inputText}.
  Only return the translated text. Do not add additional descriptions.'`;

  for (let i = 0; i < GROQ_API_KEYS.length; i++) {
    const groq = new Groq({
      apiKey: GROQ_API_KEYS[i],
    });

    try {
      const response = await groq.chat.completions.create({
        model: "openai/gpt-oss-120b",
        messages: [
          {
            role: "system",
            content: "You are an expert translation assistant.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      console.log(response);
      console.log(response.choices[0]?.message);

      // Success → return translation
      return response.choices[0]?.message?.content?.trim();
    } catch (error) {
      const status =
        error?.status || error?.response?.status || error?.error?.status;

      console.error(`Groq API key ${i + 1} failed`, "Status:", status);
      console.error("Error message:", error?.message);
      console.error("Error object:", error);

      // If this was the last key, return fallback
      if (i === GROQ_API_KEYS.length - 1) {
        return "Couldn't load translations.";
      }

      // Otherwise, try next API key
      continue;
    }
  }

  return "Couldn't load translations.";
}
