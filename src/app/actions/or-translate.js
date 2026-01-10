"use server";

import { OpenRouter } from "@openrouter/sdk";

const openrouter = new OpenRouter({
  apiKey: process.env.TRANSLATE_OPENROUTER_API_KEY,
});

const MODELS = [
  "google/gemini-2.0-flash-exp:free",
  "google/gemma-3-27b-it:free",
  "openai/gpt-oss-120b:free",
  "nvidia/nemotron-3-nano-30b-a3b:free",
  "nvidia/nemotron-nano-12b-v2-vl:free",
];

async function callWithFallback(prompt) {
  let lastError = null;

  for (const model of MODELS) {
    try {
      console.log(`Trying model: ${model}`);

      const responseText = await openrouter.chat.send({
        model,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      const content = responseText?.choices?.[0]?.message?.content;
      //   console.log('content: ', content);
      //   console.log('responseText: ', responseText);

      if (!content) {
        throw new Error("Empty response from model");
      }

      return content;
    } catch (err) {
      console.warn(`Model failed: ${model}`, err.message);
      lastError = err;
    }
  }

  return {
    error: "403: Failed to return a valid response.",
    details: lastError?.message || "Unknown error",
  };
}

async function translateText(inputText, targetLanguage) {
  const prompt = `Detect the language of the text and translate it into ${targetLanguage}: ${inputText}`;
  const additionalPrompt =
    "Just return the translated text. Do not add additional descriptions such as `Here are the translations`";

  return await callWithFallback(prompt + additionalPrompt);
}

export default async function translate(inputText, targetLanguage) {
  return translateText(inputText, targetLanguage);
}
