// target e
//                 a
//                /  \
           //   b      c
//            /  \      \
        //   d    e      f

export function treeIncludes(root,target){
    if (root === null) return false
    const queue = [root]
    while (queue.length >0 ){
            const current = queue.shift()
        if (current.val === target) return true
            console.log(current.val)
        if (current.left) queue.push(current.left)
        if (current.right) queue.push(current.right)

    }
    return false


}

export function treeIncludesRecursiveDepthFirst(root,target){
    if (root === null) return false
    if (root.val === target) return true
   return treeIncludesRecursiveDepthFirst(root.left,target) || treeIncludesRecursiveDepthFirst(root.right,target)

}