import {depthFirstTraversal} from "./depth-first-traversal.js";
import {DepthFirstRecursive} from './depth-first-recursive.js'
import {BreadthFirstTraversal} from './breadth-first-traversal.js'
import {treeIncludes,treeIncludesRecursiveDepthFirst} from "./tree-includes.js";
import {treeSumRecursion,treeSumIterative} from "./tree-sum.js";

class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
const f = new Node(6);
a.left  = b;
a.right = c;
b.left  = d;
b.right = e;
c.right = f;
//
let results_depthFirstTraversal = depthFirstTraversal(a)
console.log(results_depthFirstTraversal)
let results_DepthFirstRecursive = DepthFirstRecursive(a)
console.log(results_DepthFirstRecursive)
let results_BreadthFirstTraversal = BreadthFirstTraversal(a)
console.log(results_BreadthFirstTraversal)

let results_treeIncludes = treeIncludes(a,'e')

console.log(results_treeIncludes)

let results_treeIncludesRecursiveDepthFirst = treeIncludesRecursiveDepthFirst(a,'e')

console.log(results_treeIncludesRecursiveDepthFirst)



let results_treeSumRecursion = treeSumRecursion(a)

console.log(results_treeSumRecursion)


let results_treeSumIterative= treeSumRecursion(a)

console.log(results_treeSumIterative)