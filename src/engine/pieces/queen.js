import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king'

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        // Diagonal moves
        for (let i = location.row + 1; i <= 7; i++) {
            if (location.col - location.row + i >= 0 && location.col - location.row + i <= 7) {
                if (board.getPiece(Square.at(i, location.col - location.row + i)) === undefined) {
                    moves.push(Square.at(i, location.col - location.row + i));
                } else if (this.pieceTakerCheck(i, location.col - location.row + i, board)) {
                    moves.push(Square.at(i, location.col - location.row + i));
                    break;
                }
                else {
                    break;
                }
            }
        }

        for (let i = location.row + 1; i <= 7; i++) {
            if (location.col + location.row - i >= 0 && location.col + location.row - i <= 7) {
                if (board.getPiece(Square.at(i, location.col + location.row - i)) === undefined) {
                    moves.push(Square.at(i, location.col + location.row - i));
                } else if (this.pieceTakerCheck(i, location.col + location.row - i, board)) {
                    moves.push(Square.at(i, location.col + location.row - i));
                    break;
                }
                else {
                    break;
                }
            }
        }

        for (let i = location.row - 1; i >= 0; i--) {
            if (location.col - location.row + i >= 0 && location.col - location.row + i <= 7) {
                if (board.getPiece(Square.at(i, location.col - location.row + i)) === undefined) {
                    moves.push(Square.at(i, location.col - location.row + i));
                } else if (this.pieceTakerCheck(i, location.col - location.row + i, board)) {
                    moves.push(Square.at(i, location.col - location.row + i, board));
                    break;
                }
                else {
                    break;
                }
            }
        }
        for (let i = location.row - 1; i >= 0; i--) {
            if (location.col + location.row - i >= 0 && location.col + location.row - i <= 7) {
                if (board.getPiece(Square.at(i, location.col + location.row - i)) === undefined) {
                    moves.push(Square.at(i, location.col + location.row - i));
                } else if (this.pieceTakerCheck(i, location.col + location.row - i, board)) {
                    moves.push(Square.at(i, location.col + location.row - i));
                    break;
                }
                else {
                    break;
                }
            }
        }

        //Horizontal and vertical moves
        for (let i = location.row + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(i, location.col)) === undefined) {
                moves.push(Square.at(i, location.col));
            }
            else if (this.pieceTakerCheck(i, location.col, board)) {
                moves.push(Square.at(i, location.col));
                break;
            }
            else break;
        }


        for (let i = location.row - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(i, location.col)) === undefined) {
                moves.push(Square.at(i, location.col));
            }
            else if (this.pieceTakerCheck(i, location.col, board)) {
                moves.push(Square.at(i, location.col));
                break;
            }
            else break;
        }

        for (let i = location.col + 1; i <= 7; i++) {
            if (board.getPiece(Square.at(location.row, i)) === undefined) {
                moves.push(Square.at(location.row, i));
            }
            else if (this.pieceTakerCheck(location.row, i, board)) {
                moves.push(Square.at(location.row, i));
                break;
            }
            else break;
        }

        for (let i = location.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(location.row, i)) === undefined) {
                moves.push(Square.at(location.row, i));
            }
            else if (this.pieceTakerCheck(location.row, i, board)) {
                moves.push(Square.at(location.row, i));
                break;
            }
            else break;
        }

        return moves;
    }

    pieceTakerCheck(row, column, ourboard) {
        return ourboard.getPiece(Square.at(row, column)).player !== this.player && !(ourboard.getPiece(Square.at(row, column)) instanceof King);
    }

}
