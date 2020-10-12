const node = value => ({
  value,
  children: []
})

const a = node('a');
const b = node('b');
const c = node('c');
const d = node('d');
const e = node('e');
const f = node('f');
const g = node('g');
const h = node('h');
const i = node('i');
const j = node('j');
const k = node('k');
const l = node('l');
const m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const nodeLogger = node => {
  console.log(node.value);
}


// BFS
const bfs = (node, cb) => {
  let queue = [node]

  const helper = () => {
    const first = queue.shift()
    queue = queue.concat(first.children)
    cb(first)
  }

  while(queue.length)
    helper()
}

// recursive solution
const bfs2 = (node, cb, children=[]) => {
  cb(node)
  children = children.slice(1).concat(node.children)
  if (children.length) {
    return bfs2(children[0], cb, children)
  }
}

// iteration && clean
const bfs3 = (node, cb) => {
  let queue = [node]
  while (queue.length) {
    const target = queue.shift()
    // queue = [...queue, ...target.children]
    queue = queue.concat(target.children)
    // or we can declare const queue and do...
    // q.push(...target.children)
    cb(target)
  }
}

const bfs4 = (startingNode, callback) => {
  // we use a queue to iterate over the tree
  // progressively adding the children as we go
  // The tree begins with the first node
  const queue = [startingNode];
  // you might want to consider handling edges cases
  /// such as not receiving a properly formatted node
  // or make a proper Node constructor/prototype (see below)
  while (queue.length) {
    // we shift off the array instead of iterating with a counter
    // as we are treating it as a queue (FIFO)
    const node = queue.shift();
    callback(node);
    // es6 format:
    queue.push(...node.children);
    // es5 might look like this if queue were a var (or let) instead of const
    // queue = queue.concat(node.children)
    // or:
    // queue.push.apply(queue, node.children)
  }
};

// bfs(a, nodeLogger)
// bfs2(a, nodeLogger)
// bfs3(a, nodeLogger)
bfs4(a, nodeLogger)

// DFS - Pre-order
const dfsPre = (node, cb, next=[]) => {
  cb(node)
  const newNext = [...node.children, ...next]
  if (newNext.length) {
    return dfsPre(newNext[0], cb, newNext.slice(1))
  }
}

// dfsPre(a, nodeLogger)
