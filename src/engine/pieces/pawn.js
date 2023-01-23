import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        if (this.player === Player.WHITE) {
            if (location.row === 1 && board.getPiece(Square.at(location.row + 2, location.col)) === undefined && board.getPiece(Square.at(location.row + 1, location.col)) === undefined) {
                moves.push(Square.at(location.row + 2, location.col))
            }
            if (((location.row !== 7) && board.getPiece(Square.at(location.row + 1, location.col)) === undefined)) {
                moves.push(Square.at(location.row + 1, location.col))
            }
            if (((location.row !== 7) && board.getPiece(Square.at(location.row + 1, location.col + 1)) !== undefined
                && board.getPiece(Square.at(location.row + 1, location.col + 1)).player !== Player.WHITE)) {
                moves.push(Square.at(location.row + 1, location.col + 1))
            }
            if (((location.row !== 7) && board.getPiece(Square.at(location.row + 1, location.col - 1)) !== undefined
                && board.getPiece(Square.at(location.row + 1, location.col - 1)).player !== Player.WHITE)
            ) {
                moves.push(Square.at(location.row + 1, location.col - 1))
                console.log(board.getPiece(Square.at(location.row + 1, location.col - 1)))
            }

            // && board.getPiece(Square.at(location.row + 1, location.col - 1)) !== "King"

        } else {
            if (location.row === 6 && board.getPiece(Square.at(location.row - 2, location.col)) === undefined && board.getPiece(Square.at(location.row - 1, location.col)) === undefined) {
                moves.push(Square.at(location.row - 2, location.col))
            }
            if (location.row !== 0 && board.getPiece(Square.at(location.row - 1, location.col)) === undefined) {
                moves.push(Square.at(location.row - 1, location.col))
            }
            if (((location.row !== 0) && board.getPiece(Square.at(location.row - 1, location.col + 1)) !== undefined
                && board.getPiece(Square.at(location.row - 1, location.col + 1)).player !== Player.BLACK)) {
                moves.push(Square.at(location.row - 1, location.col + 1))
            }
            if (((location.row !== 0) && board.getPiece(Square.at(location.row - 1, location.col - 1)) !== undefined
                && board.getPiece(Square.at(location.row - 1, location.col - 1)).player !== Player.BLACK)) {
                moves.push(Square.at(location.row - 1, location.col - 1))
            }
        }
        return moves
    }
}


/*
        it('cannot take the opposing king', () => {
            const pawn = new Pawn(Player.WHITE);
            const opposingKing = new King(Player.BLACK);
            board.setPiece(Square.at(4, 4), pawn);
            board.setPiece(Square.at(5, 3), opposingKing);

            const moves = pawn.getAvailableMoves(board);

            moves.should.not.deep.include(Square.at(5, 3));
        });
    */