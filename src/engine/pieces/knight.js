import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king'

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        for (let i = location.row - 2; i <= location.row + 2; i += 4) {
            for (let j = location.col - 1; j <= location.col + 1; j += 2) {
                if ((this.stayOnBoardCheck(i, j) && board.getPiece(Square.at(i, j)) === undefined)
                    || (this.stayOnBoardCheck(i, j) && board.getPiece(Square.at(i, j)) !== undefined
                        && board.getPiece(Square.at(i, j)).player !== this.player && !(board.getPiece(Square.at(i, j)) instanceof King))) {
                    moves.push(Square.at(i, j));
                }
            }
        }

        for (let i = location.col - 2; i <= location.row + 2; i += 4) {
            for (let j = location.row - 1; j <= location.row + 1; j += 2) {
                if ((this.stayOnBoardCheck(j, i) && board.getPiece(Square.at(j, i)) === undefined)
                    || (this.stayOnBoardCheck(j, i) && board.getPiece(Square.at(j, i)) !== undefined
                        && board.getPiece(Square.at(j, i)).player !== this.player && !(board.getPiece(Square.at(j, i)) instanceof King))) {
                    moves.push(Square.at(j, i));
                }
            }
        }
        return moves;
    }

    stayOnBoardCheck(row, column) {
        return (row >= 0 && row <= 7 && column >= 0 && column <= 7);
    }

}
