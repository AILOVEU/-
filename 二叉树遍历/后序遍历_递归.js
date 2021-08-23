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