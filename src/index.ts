import { Trie } from "./prefix-tree/trie";

const trie = new Trie();

interface Autocomplete {
  addPhrase(word: string, priority?: number): Autocomplete; // Return type enables chaining
  suggest(prefix: string): string[] | null;
}

const autocomplete: Autocomplete = {
  addPhrase(word: string, priority?: number): typeof autocomplete {
    trie.addPhrase(word, priority);
    return this;
  },

  suggest(prefix: string): string[] | null {
    return trie.suggest(prefix);
  },
};

export default autocomplete;
