import { Trie } from "./prefix-tree/trie";

export const autocomplete = (
  prefix: string,
  words: string[]
): string[] | null => {
  const trie = new Trie();
  words.forEach((word) => trie.insert(word));
  return trie.suggest(prefix);
};
