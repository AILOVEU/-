// root入栈
// 出栈，入结果队列
// right入栈,left入栈
function preorderTraversal(root) {
    if(root) {
        let stack = [root];
        let res = [];
        while(stack.length) {
            let node = stack.pop();
            res.push(node.val);
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);
        }
    }
}


// root入栈
// 出栈，结果入栈
// left入栈,right入栈
function postorderTraversal() {
    if(!root) {
        return;
    }
    let node = root;
    let stack = [node];
    let res = [];
    while(stack.length) {
        node = stack.pop();
        res.unshift(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
    }
}

