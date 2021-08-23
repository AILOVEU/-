function preorderTraversal(root) {
    let res = [];
    let preorderTraversalNode = function(node) {
        if(node) {
            res.push(node);// 先遍历中节点
            preorderTraversalNode(node.left); // 再遍历左节点
            preorderTraversalNode(node.right); // 再遍历右节点
        }
    }
    preorderTraversalNode(root);
    return res;
}