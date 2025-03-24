import { neon } from "@neondatabase/serverless";
import { auth } from "@clerk/nextjs/server";
import TranslationsCard from "@/components/Card/TranslationCard";

async function getData(userId) {
  const sql = neon(process.env.DATABASE_URL);
  const response = await sql`
  SELECT 
  targetLanguage,
  COUNT(*) AS translationCount,
  ARRAY_AGG(sourceText) AS sourceTexts,
  ARRAY_AGG(translatedText) AS translatedTexts
  FROM translations
  WHERE userID = ${userId}
  GROUP BY targetLanguage;
  `;
  return response;
}

export default async function Translations() {
  const { userId } = await auth();
  const data = await getData(userId);
  // console.log(data);

  return (
    <>
      <div className="max-w-7xl mx-auto m-6 p-8 min-h-screen bg-[#101012]/70 backdrop-blur-lg text-[#fafafa] border-2 border-white/20 rounded-lg shadow-lg">
        <h1 className="text-4xl/[1.5] font-bold mb-8 text-center">
          <span className="border-b-4 border-[#ff0080]">Translations</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <TranslationsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
