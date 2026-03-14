import tr from "../locales/tr.json";
import en from "../locales/en.json";

export const dictionaries = {
  tr,
  en,
};

export function getDictionary(lang: string) {
  if (lang === "en") return dictionaries.en;
  return dictionaries.tr;
}