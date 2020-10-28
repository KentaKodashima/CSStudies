// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  // Check if the passed node's value is greater than max if it has value
  if (max && node.data > max) return false
  // Check if the passed node's value is less than min if it has value
  if (min && node.data < min) return false
  // This'll won't stop until it iterates through all the nodes on the left
  // When it stopped, it goes on to the next if statement
  if (node.left && !validate(node.left, min, node.data)) return false
  // This'll won't stop until it iterates through all the nodes on the right
  if (node.right && !validate(node.right, node.data, max)) return false

  return true
}

module.exports = validate;
