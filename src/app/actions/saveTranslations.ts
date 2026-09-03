"use server";

import { auth } from "@clerk/nextjs/server";
import { neon } from "@neondatabase/serverless";

export default async function saveTranslations(
  targetLanguage: string,
  sourceText: string,
  translatedText: string
): Promise<void> {
  const { userId } = await auth.protect();

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not defined in environment variables");
  }

  const sql = neon(databaseUrl);
  await sql`
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
}
