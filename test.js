class TrieNode {

    constructor() {
        this.children = Array(26).fill(null)
        this.isEndOfNode = false
    }
}

let node = new TrieNode()
    function createNode(text = 'yes', node) {

        for (const i in text) {
            if (node.children[i.charCodeAt(0)] == null) {
                console.log(i.charCodeAt(0))
            }
        }
}
createNode()