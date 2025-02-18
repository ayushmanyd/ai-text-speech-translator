import languages from "@/components/Dropdown/Languages";

function getLangName(langCode) {
  const language = languages.find((lang) => lang.langCode === langCode);
  return language ? language.langName : langCode;
}

export default function TranslationsCard({ item }) {
  return (
    <main className="bg-black h-full border-2 border-accent rounded-lg p-4">
      <div>
        <h4 className="pb-2 text-lg border-b-2 text-center font-semibold">
          {getLangName(item.targetlanguage) ? (
            <span>{getLangName(item.targetlanguage)}</span>
          ) : (
            <span>Unknown Languages</span>
          )}
        </h4>
      </div>
      <div className="p-4 text-base flex-grow space-y-4">
        {item.sourcetexts.map((sourceText, index) => (
          <div key={`${item.targetlanguage}_${index}`} className="mb-2 pb-4 border-b-2 border-accent last:border-b-0">
            <div>
              <h3 className="text-base text-center font-semibold text-white/60">
                Text:
              </h3>
              <p>{sourceText || "No Text available."}</p>
            </div>
            <div>
              <h3 className="text-base text-center font-semibold text-white/60">
                Translated Text:
              </h3>
              <p>{item.translatedtexts[index] || "No Text available."}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
