import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Player from '../../../src/engine/player';
import King from '../../../src/engine/pieces/king';
import Square from '../../../src/engine/square';
import Board from '../../../src/engine/board';

describe('Queen', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move in any direction', () => {
        const queen = new Queen(Player.WHITE);
        board.setPiece(Square.at(2, 3), queen);

        const moves = queen.getAvailableMoves(board);

        const expectedMoves = [
            // Forwards diagonal
            Square.at(0, 1), Square.at(1, 2), Square.at(3, 4), Square.at(4, 5), Square.at(5, 6), Square.at(6, 7),
            // Backwards diagonal
            Square.at(0, 5), Square.at(1, 4), Square.at(3, 2), Square.at(4, 1), Square.at(5, 0),
            // Straight forwards
            Square.at(0, 3), Square.at(1, 3), Square.at(3, 3), Square.at(4, 3), Square.at(5, 3), Square.at(6, 3), Square.at(7, 3),
            // Straight sideways
            Square.at(2, 0), Square.at(2, 1), Square.at(2, 2), Square.at(2, 4), Square.at(2, 5), Square.at(2, 6), Square.at(2, 7)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

});
