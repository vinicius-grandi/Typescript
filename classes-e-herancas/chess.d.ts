declare type Color = 'Black' | 'White';
declare type Files = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
declare type Ranks = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
declare class Game {
    private pieces;
    private static makePieces;
}
declare abstract class Piece {
    private readonly color;
    protected position: Position;
    constructor(color: Color, files: Files, ranks: Ranks);
    moveTo(position: Position): void;
    abstract canMoveTo(position: Position): boolean;
}
declare class Position {
    private files;
    private ranks;
    constructor(files: Files, ranks: Ranks);
    distanceFrom(position: Position): {
        ranks: number;
        files: number;
    };
}
declare class King extends Piece {
    canMoveTo(position: Position): boolean;
}
declare class Queen extends Piece {
    canMoveTo(position: Position): boolean;
}
declare class Bishop extends Piece {
    canMoveTo(position: Position): boolean;
}
declare class Knight extends Piece {
    canMoveTo(position: Position): boolean;
}
declare class Rook extends Piece {
    canMoveTo(position: Position): boolean;
}
declare class Pawn extends Piece {
    canMoveTo(position: Position): boolean;
}
