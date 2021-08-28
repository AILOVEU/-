/**
 * 前序遍历：
 * 第一种：将左子树入栈，找尽，在入栈的时候记录，并将指针移动到右子树
 * 第二种：先将根节点入栈，出栈，出栈的时候记录，右子树先入栈，左子树再入栈，弹出一次，重复(偏机器的流程)
 */


/**
 * 中序遍历：
 * 先入根节点，将左子树入栈，找尽，出栈，在出栈的时候记录，并将指针移动到右子树
 * 
 * 中序遍历和前序遍历：找尽左子树，前序遍历入栈时记录，后序遍历出栈时记录，然后找右子树
 */