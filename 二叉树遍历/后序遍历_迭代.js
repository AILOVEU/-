function postorderTraversal() {
    let res = [];
    let stack = [];
    while(root || stack.length) {
        while(root) {
            // 前序遍历顺序：中 左 右
            // 中序遍历顺序：左 中 右
            res.unshift(root.val); // 遍历顺序：中 右 左 ,存储的时候是向左加，左 右 中
            stack.push(root); // 当前节点入栈，先存入right
            root = root.right;
        }
        root = stack.pop();
        root = root.left;

    }
}