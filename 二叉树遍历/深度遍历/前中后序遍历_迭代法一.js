// 遍尽left，每次遍及入结果队列
// 出栈
// 指向right
function _preorderTraversal(root) {
    let  stack = [];
    let res = [];
    let node = root;
    while(node || stack.length) {
        while(node) {
            stack.push(node);
            res.push(node.val);
            node = node.left;
        }
        node = node.pop();
        node = node.right;
    }
}
// 遍尽left
// 出栈，入结果队列
// 指向right
function _inorderTraversal(root) {
    if(root) {
        let res = [];
        let stack = [];
        let node = root;
        // 中序遍历
        while(node || stack.length) {
            while(node) {
                stack.push(node);
                node = node.left;
            }
            let node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
    }
}
// 遍尽right，每次遍及入结果栈
// 出栈
// 指向left
function postorderTraversal() {
    let res = [];
    let stack = [];
    let node = root;
    while(node || stack.length) {
        while(node) {
            stack.push(node);
            res.unshift(node.val); 
            node = node.right;
        }
        node = stack.pop();
        node = node.left;
    }
}