class GraphNode<T = unknown> {
  #value: T;
  #adjacents: unknown[];
  constructor(value: T) {
    this.#value = value;
    this.#adjacents = [];
  }

  addAdjacent(node: unknown) {
    this.#adjacents.push(node);
  }

  removeAdjacent(node: unknown) {
    const index = this.#adjacents.indexOf(node)
    if (index > -1) {
      this.#adjacents.splice(index, 1);
      return node;
    }
  }

  getAdjacents() {
    return this.#adjacents;
  }

  isAdjacent(node: unknown) {
    return this.#adjacents.indexOf(node) > -1;
  }

  get value() {
    return this.#value;
  }
}

class Graph<T = string> {
  static #UNDIRECTED = Symbol('directed graph');
  static #DIRECTED = Symbol('undirected graph');
  #nodes = new Map<T, GraphNode<T>>();
  edgeDirection: symbol;

  constructor(edgeDirection = Graph.#DIRECTED) {
    this.edgeDirection = edgeDirection;
  }

  addVertex(nodeValue: T) {
    if (this.#nodes.has(nodeValue)) {
      return this.#nodes.get(nodeValue)!;
    }

    const n = new GraphNode(nodeValue);
    this.#nodes.set(nodeValue, n);
    return n;
  }

  removeVertex(value: T) {
    const current = this.#nodes.get(value);
    if (current) {
      for (const node of this.#nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.#nodes.delete(value);
  }

  addEdge(source: T, destination: T) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    if (this.edgeDirection === Graph.#UNDIRECTED) {
      destinationNode.addAdjacent(sourceNode);
    }

    return [sourceNode, destinationNode];
  }

  removeEdge(source: T, destination: T) {
    const sourceNode = this.#nodes.get(source);
    const destinationNode = this.#nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);
      if (this.edgeDirection === Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(sourceNode);
      }
    }

    return [sourceNode, destinationNode];
  }

  static get UNDIRECTED() {
    return Graph.#UNDIRECTED;
  }

  static get DIRECTED() {
    return Graph.#DIRECTED;
  }
}

function rest(...meme: string[]) {
  let txt = '';
  for (const val of meme) {
    txt += val;
  }
  return txt;
}

console.log(rest('jojo', 'jo', 'kldfg'));

Queen