import en from "./en.json";
import ptBR from "./pt-br.json";

const messages = {
  en,
  "pt-br": ptBR
};

export type Locale = keyof typeof messages;

export function getMessages(locale: Locale) {
  return messages[locale] ?? messages.en;
}
