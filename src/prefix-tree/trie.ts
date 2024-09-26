import TrieNode from "./trie-node";

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addPhrase(phrase: string, priority: number | null = null): Trie {
    let node = this.root;
    phrase.split("").forEach((char) => {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    });

    node.isEndOfPhrase = true;
    node.priority = priority !== null ? priority : Infinity;
    return this;
  }

  suggest(prefix: string): string[] | null {
    let node = this.root;
    const found = prefix.split("").every((char) => {
      if (!node.children[char]) return false;
      node = node.children[char];
      return true;
    });
    if (!found) return null;

    const suggestions: { phrase: string; priority: number }[] = [];
    this.collectSuggestions(node, prefix, suggestions);
    suggestions.sort((a, b) => a.priority - b.priority);
    return suggestions.map((suggestion) => suggestion.phrase);
  }

  private collectSuggestions(
    node: TrieNode,
    prefix: string,
    suggestions: { phrase: string; priority: number }[]
  ): void {
    if (node.isEndOfPhrase)
      suggestions.push({ phrase: prefix, priority: node.priority! });

    Object.keys(node.children).forEach((char) => {
      this.collectSuggestions(node.children[char], prefix + char, suggestions);
    });
  }
}
