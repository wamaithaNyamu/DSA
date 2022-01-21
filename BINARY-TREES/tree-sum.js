
export function treeSumRecursion(root){
    if(root === null) return 0;
    return  root.val + treeSumRecursion(root.left) + treeSumRecursion(root.right)


}

export function treeSumIterative(root){
    if(root === null) return 0;
    let totalSum = 0;
    const queue = [root]
    while(queue.length > 0){
        const current = queue.shift();
        totalSum += current.val;
        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)


    }
    return totalSum;
}