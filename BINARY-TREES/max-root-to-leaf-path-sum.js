export function maxRootToLeafPathSum(root){
    if (root === null) return -Infinity;
    if (root.left === null && root.right === null) return root.val;
    const maxRootChild = Math.max(maxRootToLeafPathSum(root.left), maxRootToLeafPathSum(root.right))
    return root.val + maxRootChild;
}