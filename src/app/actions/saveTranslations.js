"use server";

import { auth } from "@clerk/nextjs/server";
import { neon } from "@neondatabase/serverless";

export default async function saveTranslations(
  targetLanguage,
  sourceText,
  translatedText
) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`
  INSERT INTO translations (
    userID,
    targetLanguage,
    sourceText,
    translatedText
    ) VALUES (
        ${userId},
        ${targetLanguage},
        ${sourceText},
        ${translatedText}
    )`;
  // console.log(response);
}
