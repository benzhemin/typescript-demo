interface Node {
  left: Node;
  right: Node;
  data: any;
}

function traverse(node: Node) {
  const queue = [node];

  while (queue.length > 0) {
    const n = queue.shift()!;
    console.log(n.data);

    n.left && queue.push(n.left);
    n.right && queue.push(n.right);
  }
}