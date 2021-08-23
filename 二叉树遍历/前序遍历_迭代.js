/**
 *              A
 *            ↙ ↘
 *          B       C
 *        ↙ ↘       ↘
 *       D    E        F
 * 
 */
function preorderTraversal(root) {
    if(root) {
        let stack = [root];
        let res = [];
        while(stack.length) {
            let node = stack.pop();
            res.push(node.val);
            // 入栈和出栈的顺序:
            // 入栈         出栈    
            // A        
            // C B          A
            // C E D        B
            // C E          D
            // C            E
            node.right && stack.push(node.right);
            node.left && stack.push(node.left);

        }
    }
}



// function preorderTraversal(root) {
//     let  stack = [];
//     let res = [];
//     while(root || stack.length) { //root不为空 || stack有值
//         while(root) {
//             res.push(root.val); // 入栈的时候记录结果
//             stack.push(root);
//             root = root.left;
//         }
//         root = stack.pop();
//         root = root.right;
//     }
// }