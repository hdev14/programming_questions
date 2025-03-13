export default class TreeNode {
  constructor(
    readonly value: any,
    readonly left: TreeNode | null = null,
    readonly right: TreeNode | null = null
  ) { }
}