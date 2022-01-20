export function DepthFirstRecursive(root){
    if (root === null) return []
//    traverse recursively
    console.log("ROOT IS :",root)
    console.log("ROOT.VAL IS :",root.val)
    const leftValues = DepthFirstRecursive(root.left)
    // console.log("LEFT VALUES",leftValues)
    const rightValues = DepthFirstRecursive(root.right)
    // console.log("RIGHT VALUES",rightValues)

    //[ 1, 6,
    return [root.val, ...leftValues, ...rightValues]
}