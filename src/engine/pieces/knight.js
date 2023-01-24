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
                if (i >= 0 && i <= 7 && j >= 0 && j <= 7 && !(location.row === i && location.col === j)) {
                    moves.push(Square.at(i, j));
                }
            }
        }
        for (let i = location.col - 2; i <= location.row + 2; i += 4) {
            for (let j = location.row - 1; j <= location.row + 1; j += 2) {
                if (i >= 0 && i <= 7 && j >= 0 && j <= 7 && !(location.row === i && location.col === j)) {
                    moves.push(Square.at(j, i));
                }
            }
        }
        return moves;
    }
}
