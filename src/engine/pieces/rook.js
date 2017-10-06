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
        //    (1, 2)
        /*
        moves.push(Square.at(location.row - 1, location.col));
        moves.push(Square.at(location.row + 1, location.col));
        moves.push(Square.at(location.row + 2, location.col));
        moves.push(Square.at(location.row + 3, location.col));
        moves.push(Square.at(location.row + 4, location.col));
        moves.push(Square.at(location.row + 5, location.col));
        moves.push(Square.at(location.row + 6, location.col));

        moves.push(Square.at(location.row, location.col - 2));
        moves.push(Square.at(location.row, location.col - 1));
        moves.push(Square.at(location.row, location.col + 1));
        moves.push(Square.at(location.row, location.col + 2));
        moves.push(Square.at(location.row, location.col + 3));
        moves.push(Square.at(location.row, location.col + 4));
        moves.push(Square.at(location.row, location.col + 5));
        */

        for (let i = 0; i < location.row; i++) {
            moves.push(Square.at(i, location.col));
        }
        for (let i = location.row + 1; i < 8; i++) {
            moves.push(Square.at(i, location.col));
        }
        for (let i = 0; i < location.col; i++) {
            moves.push(Square.at(location.row, i));
        }
        for (let i = location.col + 1; i < 8; i++) {
            moves.push(Square.at(location.row, i));
        }

        return moves;
    }
}
