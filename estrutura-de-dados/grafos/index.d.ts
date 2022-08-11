declare class GraphNode<T = unknown> {
    #private;
    constructor(value: T);
    addAdjacent(node: unknown): void;
    removeAdjacent(node: unknown): unknown;
    getAdjacents(): unknown[];
    isAdjacent(node: unknown): boolean;
    get value(): T;
}
declare class Graph<T = string> {
    #private;
    edgeDirection: symbol;
    constructor(edgeDirection?: symbol);
    addVertex(nodeValue: T): GraphNode<T>;
    removeVertex(value: T): boolean;
    addEdge(source: T, destination: T): GraphNode<T>[];
    removeEdge(source: T, destination: T): (GraphNode<T> | undefined)[];
    static get UNDIRECTED(): symbol;
    static get DIRECTED(): symbol;
}
declare function rest(...meme: string[]): string;
