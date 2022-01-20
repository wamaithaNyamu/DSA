export function DepthFirstRecursive(root){
    console.log("ROOT IS :",root)
    if (root === null) return []
//    traverse recursively
    const leftValues = DepthFirstRecursive(root.left)
    console.log("LEFT VALUES : ",leftValues)
    const rightValues = DepthFirstRecursive(root.right)
    console.log("RIGHT VALUES : ",rightValues)

    return [root.val, ...leftValues, ...rightValues]
}