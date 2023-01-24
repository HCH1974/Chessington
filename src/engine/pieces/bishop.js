import Player from '../player';
import Square from '../square';
import Piece from './piece';
import King from './king'

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        const moves = []
        for (let i = location.row + 1; i <= 7; i++) {
            if (location.col - location.row + i >= 0 && location.col - location.row + i <= 7) {
                console.log(`[${i} , ${location.col - location.row + i}]`)
                moves.push(Square.at(i, location.col - location.row + i));
            }

            if (location.col + location.row - i >= 0 && location.col + location.row - i <= 7) {
                console.log(`[${i} , ${location.col + location.row - i}]`)
                moves.push(Square.at(i, location.col + location.row - i));
            }
        }

        for (let i = location.row - 1; i >= 0; i--) {
            if (location.col - location.row + i >= 0 && location.col - location.row + i <= 7) {
                console.log(`[${i} , ${location.col - location.row + i}]`)
                moves.push(Square.at(i, location.col - location.row + i));
            }
            if (location.col + location.row - i >= 0 && location.col + location.row - i <= 7) {
                console.log(`[${i} , ${location.col + location.row - i}]`)
                moves.push(Square.at(i, location.col + location.row - i));
            }
        }

        return moves;
    }
}
/*
    it('can move diagonally', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(2, 3), bishop);

        const moves = bishop.getAvailableMoves(board);

        const expectedMoves = [
            // Forwards diagonal
            Square.at(0, 1), Square.at(1, 2), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7),
            // Backwards diagonal
            Square.at(0, 5), Square.at(1, 4), Square.at(3, 2), Square.at(4, 1), Square.at(5, 0)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const bishop = new Bishop(Player.WHITE);
        board.setPiece(Square.at(2, 3), bishop);

        const moves = bishop.getAvailableMoves(board);

        moves.should.have.length(11);
    });
*/