class TrieNode {
  children: { [key: string]: TrieNode } = {};
  isEndOfWord: boolean = false;
}

export class Trie {
  private root: TrieNode = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  suggest(prefix: string): string[] | null {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) return null;
      node = node.children[char];
    }
    const suggestions = this.collectWords(node, prefix);
    return suggestions.length > 0 ? suggestions : null;
  }

  private collectWords(node: TrieNode, prefix: string): string[] {
    let results: string[] = [];
    if (node.isEndOfWord) results.push(prefix);
    for (const char in node.children)
      results = results.concat(
        this.collectWords(node.children[char], prefix + char)
      );

    return results;
  }
}
