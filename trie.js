class Node {
  constructor() {
    this.children = {};
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word, root = this.root) {
    let char = word[0];

    // if current root has no edge for the char, then we create a new edge for char and point it to a new destination node
    if (!root.children[char]) {
      root.children[char] = new Node();
    }
    // if there are no more remaining chars in word, we can mark the destination node's terminal property as true
    if (word.length === 1) {
      root.children[char].isTerminal = true;
      // otherwise, recursively insert the remaining chars into destination nodes
    } else {
      this.insert(word.slice(1), root.children[char]);
    }
  }

  search(word, root = this.root) {
    // if we've gone through all the characters in word
    if (word.length === 0) {
      // word exists if the current node is a terminal node
      if (root.isTerminal) {
        return true;
      } else {
        return false;
      }
    }

    // taking the first character of the string
    let char = word[0];
    // if an edge exists for this char, then recursively check the subtree at the edge's destination with the remaining chars
    if (root.children[char]) {
      return this.search(word.slice(1), root.children[char]);
    } else {
      return false;
    }
  }
}

const myTrie = new Trie();
myTrie.insert("noodles");
myTrie.insert("pizza");
console.log(myTrie.search("noodles")); // true
console.log(myTrie.search("noodle")); // false
myTrie.insert("no");
console.log(myTrie.search("no")); // true
console.log(myTrie);