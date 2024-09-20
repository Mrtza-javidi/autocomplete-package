import { Trie } from "./prefix-tree/trie";

const trie = new Trie();

export const addPhrase = (word: string, priority?: number): void => {
  trie.addPhrase(word, priority);
};

export const autocomplete = (
  prefix: string,
  words?: string[]
): string[] | null => {
  if (words) words.forEach((word) => trie.addPhrase(word)); // Add words to the Trie
  const suggestions = trie.suggest(prefix);
  return suggestions && suggestions.length > 0 ? suggestions : null;
};
