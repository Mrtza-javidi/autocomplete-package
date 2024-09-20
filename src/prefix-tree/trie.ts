class TrieNode {
  children: { [key: string]: TrieNode };
  isEndOfWord: boolean;
  priority: number | null;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.priority = null;
  }
}

export class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  addPhrase(word: string, priority: number | null = null): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    node.priority = priority !== null ? priority : 1000000;
  }

  suggest(prefix: string): string[] | null {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    const suggestions: { word: string; priority: number }[] = [];
    this.collectSuggestions(node, prefix, suggestions);
    suggestions.sort((a, b) => a.priority - b.priority);
    return suggestions.map((suggestion) => suggestion.word);
  }

  private collectSuggestions(
    node: TrieNode,
    prefix: string,
    suggestions: { word: string; priority: number }[]
  ): void {
    if (node.isEndOfWord)
      suggestions.push({ word: prefix, priority: node.priority! });

    for (const char in node.children)
      this.collectSuggestions(node.children[char], prefix + char, suggestions);
  }
}
