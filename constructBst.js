// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.

// For example, given

// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var buildTree = function (preorder, inorder) {
  const result = [];
  const helper = (preStart, inStart, inEnd, preorder, inorder) => {
    if (preStart > preorder.length - 1 || inStart > inEnd) {
      return null;
    }
    let root = new TreeNode(preorder[preStart]);
    let index = 0;
    for (let i = inStart; i <= inEnd; i++) {
      if (inorder[i] === root.val) {
        index = i;
      }
    }
    root.left = helper(preStart + 1, inStart, index - 1, preorder, inorder);
    root.right = helper(
      preStart + index - inStart + 1,
      index + 1,
      inEnd,
      preorder,
      inorder
    );

    return result.push(root.val);
  };
  return helper(0, 0, inorder.length - 1, preorder, inorder);
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
// [3,9,20,null,null,15,7]
