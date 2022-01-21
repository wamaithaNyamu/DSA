export function treeMinIterativeDepthFirst(root){
    // find the minimum
    let smallest = Infinity;
    if(root === null) return 0;
    const stack = [root]

    while (stack.length > 0 ){
        const current = stack.pop()
        if (current.val < smallest) smallest = current.val
        if (current.left !== null) stack.push(current.left)
        if (current.right !== null) stack.push(current.right)

    }

    return smallest


}
export function treeMinIterativeBreadthFirst(root){
    // find the minimum
    let smallest = Infinity;
    if(root === null) return 0;
    const queue = [root]

    while (queue.length > 0 ){
        const current = queue.shift()
        if (current.val < smallest) smallest = current.val
        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)

    }

    return smallest


}
export function treeMinIterativeRecursive(root){
    // find the minimum
    if(root === null) return Infinity;
    const leftMin = treeMinIterativeRecursive(root.left)
    const rightMin = treeMinIterativeRecursive(root.right)
    return Math.min(root.val, leftMin, rightMin)



}