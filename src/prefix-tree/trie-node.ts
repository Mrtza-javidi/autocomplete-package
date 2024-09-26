export default class TrieNode {
  children: { [key: string]: TrieNode };

  isEndOfWord: boolean;

  priority: number | null;

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.priority = null;
  }
}
