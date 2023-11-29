import type { CollectionEntry } from "astro:content";

type i18nId = CollectionEntry<"i18n">["id"];

export default function getHrefPrefix(i18n: i18nId) {
  return i18n === "en" ? "/" : `/${i18n}`;
}
