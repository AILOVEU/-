function inorderTraversal(root) {
    let res = [];
    let inorderTraversalNode = function(node) {
        if(node) {
            inorderTraversalNode(node.left); // 先遍历所有左边的;左边的一直加到栈中，等到为空的时候，取出来上层的node
            res.push(node);
            inorderTraversalNode(node.right); // 最后遍历所有右边的
        }
    }
    inorderTraversalNode(root);
    return res;
}