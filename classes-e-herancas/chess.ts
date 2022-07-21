type Color = 'Black' | 'White'
type Files = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Ranks = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
// Represents a chess game
class Game {
    private pieces = Game.makePieces()
    private static makePieces() {
    return [
    // Kings
    new King('White', 'E', 1),
    new King('Black', 'E', 8),
    // Queens
    new Queen('White', 'D', 1),
    new Queen('Black', 'D', 8),
    // Bishops
    new Bishop('White', 'C', 1),
    new Bishop('White', 'F', 1),
    new Bishop('Black', 'C', 8),
    new Bishop('Black', 'F', 8),
    // ...
        ]
    }
}
// A chess piece
abstract class Piece {
    protected position: Position

    constructor(
    private readonly color: Color,
    files: Files,
    ranks: Ranks
    )
    {
        this.position = new Position(files, ranks)
    }

    moveTo(position: Position) {
        this.position = position
    }

    abstract canMoveTo(position: Position): boolean
}
// A set of coordinates for a piece
class Position {
    constructor(
        private files: Files,
        private ranks: Ranks,
    )
        {

        }

    distanceFrom(position: Position)
    {
        return {
            ranks: Math.abs(position.ranks - this.ranks),
            files: Math.abs(position.files.charCodeAt(0) - this.files.charCodeAt(0))
        }
    }
}
// ...
class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.ranks < 2 && distance.files < 2
    }
}

class Queen extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.ranks < 2 && distance.files < 2
    }
}

class Bishop extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.ranks < 2 && distance.files < 2
    }
}

class Knight extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.ranks < 2 && distance.files < 2
    }
}

class Rook extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.ranks < 2 && distance.files < 2
    }
}

class Pawn extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.ranks < 2 && distance.files < 2
    }
}