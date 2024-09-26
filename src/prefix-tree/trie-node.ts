export default class TrieNode {
  children: { [key: string]: TrieNode };

  isEndOfPhrase: boolean;

  priority: number | null;

  constructor() {
    this.children = {};
    this.isEndOfPhrase = false;
    this.priority = null;
  }
}
