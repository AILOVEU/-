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

function postorderTraversal() {
    let res = [];
    let postorderTraversalNode = function(node) {
        if(node) {
            postorderTraversalNode(node.left);
            postorderTraversalNode(node.right);
            res.push(node);
        }
    }
    postorderTraversalNode(root);
    return res;

}