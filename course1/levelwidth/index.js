// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let level = 0
  let counter = [0]
  let arr = [root, undefined]

  while (arr.length > 1) {
    const node = arr.shift()
    
    if (node === undefined) {
      level += 1
      counter.push(0)
      arr.push(node)
    } else {
      arr.push(...node.children)
      counter[level] = counter[level] + 1
      // Or counter[counter.length - 1]++
    }
  }

  return counter
}

module.exports = levelWidth;
