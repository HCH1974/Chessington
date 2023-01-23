import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        for (let i = location.row + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(i, location.col)) === undefined) {
                moves.push(Square.at(i, location.col));
            }
            else break;
        }

        for (let i = location.row - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(i, location.col)) === undefined) {
                moves.push(Square.at(i, location.col));
            }
            else break;
        }

        for (let i = location.col + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(location.row, i)) === undefined) {
                moves.push(Square.at(location.row, i));
            }

            // TODO - change to not moving through, just taking
            else if (board.getPiece(Square.at(location.row, i)).player === Player.BLACK) {
                moves.push(Square.at(location.row, i));
            }
            else break;
        }

        for (let i = location.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(location.row, i)) === undefined) {
                moves.push(Square.at(location.row, i));
            }
            else break;
        }

        return moves;
    }
}
