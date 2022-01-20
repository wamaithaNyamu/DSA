export function BreadthFirstTraversal(root){
    if (root === null) return []
    const queue = [root]
    const values = []

    while(queue.length >0){
        const current = queue.shift()
        values.push(current.val)
        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }

    return values
}