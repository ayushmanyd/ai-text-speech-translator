import translateText from "@/app/actions/gqTranslate";

export default async function translate(inputText, targetLanguage) {
  return translateText(inputText, targetLanguage);
}
