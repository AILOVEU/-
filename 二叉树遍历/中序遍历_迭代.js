/**
 *              A
 *            ↙ ↘
 *          B       C
 *        ↙ ↘       ↘
 *       D    E        F
 * 
 */
function inorderTraversal(root) {
    if(root) {
        let res = [];
        let stack = [];
        while(root || stack.length) {
            while(root) {
                // 栈           出栈
                // A
                // B
                // D
                //              D
                stack.push(root);
                root = root.left;
            }
            let root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
}


// function inorderTraversal(root) {
//     let res = [];
//     let stack = [];
//     while(root || stack.length) {
//         while(root) {
//             stack.push(root);
//             root = root.left;
//         }
//         root = stack.pop();
//         res.push(root.val);
//         root = root.right;
//     }
//     return res;
// }