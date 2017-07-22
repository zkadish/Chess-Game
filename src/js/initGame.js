import ChessGame from './ChessGame'
import * as Blk from './blackPieces'
import * as Wht from './whitePieces'
import gameLogic from './gameLogic'
import moves from './moves'

const DomBoard = document.querySelector('.board')

const emptyBoard = [[], [], [], [], [], [], [], []]
const board = []

// put dom elements into a standard array
emptyBoard.forEach((r, x) => {
  const row = []
  for (var y = 0; y < 8; y++) {
    const empty = document.createElement('div')
    empty.classList.add('chess-piece')
    empty.setAttribute('id', 'empty')
    const space = DomBoard.children[x].children[y]
    space.appendChild(empty)
    row.push(space)
  }
  board.push(row)
})

// reverse the order of the rows so that
// [0, 0] is the bottom left corner
board.reverse()

// init coordinate system into space element ids
// add mouse over and click events to each space
board.forEach((row, x) => {
  row.forEach((space, y) => {
    space.setAttribute('id', `${x}, ${y}`)
    space.onmouseover = function () {
      moves(this, board)
    }
    space.onclick = function () {
      const space = this.id.split(',')
      const vector = { x: Number(space[0]), y: Number(space[1]) }
      chessGame.setSpace(vector)
      gameLogic(this)
    }
  })
})

export const chessGame = new ChessGame(board)

// TODO: allow for switching sides...
// place pieces on the board
for (const key in Wht) {
  if (key === 'rook1') chessGame.setPiece({x: 0, y: 0}, Wht.rook1)
  if (key === 'horse1') chessGame.setPiece({x: 0, y: 1}, Wht.horse1)
  if (key === 'bishop1') chessGame.setPiece({x: 0, y: 2}, Wht.bishop1)
  if (key === 'king') chessGame.setPiece({x: 0, y: 3}, Wht.king)
  if (key === 'queen') chessGame.setPiece({x: 0, y: 4}, Wht.queen)
  if (key === 'bishop2') chessGame.setPiece({x: 0, y: 5}, Wht.bishop2)
  if (key === 'horse2') chessGame.setPiece({x: 0, y: 6}, Wht.horse2)
  if (key === 'rook2') chessGame.setPiece({x: 0, y: 7}, Wht.rook2)
  if (key === 'pawn1') chessGame.setPiece({x: 1, y: 0}, Wht.pawn1)
  if (key === 'pawn2') chessGame.setPiece({x: 1, y: 1}, Wht.pawn2)
  if (key === 'pawn3') chessGame.setPiece({x: 1, y: 2}, Wht.pawn3)
  if (key === 'pawn4') chessGame.setPiece({x: 1, y: 3}, Wht.pawn4)
  if (key === 'pawn5') chessGame.setPiece({x: 1, y: 4}, Wht.pawn5)
  if (key === 'pawn6') chessGame.setPiece({x: 1, y: 5}, Wht.pawn6)
  if (key === 'pawn7') chessGame.setPiece({x: 1, y: 6}, Wht.pawn7)
  if (key === 'pawn8') chessGame.setPiece({x: 1, y: 7}, Wht.pawn8)
}

for (const key in Blk) {
  if (key === 'rook1') chessGame.setPiece({x: 7, y: 0}, Blk.rook1)
  if (key === 'horse1') chessGame.setPiece({x: 7, y: 1}, Blk.horse1)
  if (key === 'bishop1') chessGame.setPiece({x: 7, y: 2}, Blk.bishop1)
  if (key === 'king') chessGame.setPiece({x: 7, y: 3}, Blk.king)
  if (key === 'queen') chessGame.setPiece({x: 7, y: 4}, Blk.queen)
  if (key === 'bishop2') chessGame.setPiece({x: 7, y: 5}, Blk.bishop2)
  if (key === 'horse2') chessGame.setPiece({x: 7, y: 6}, Blk.horse2)
  if (key === 'rook1') chessGame.setPiece({x: 7, y: 0}, Blk.rook1)
  if (key === 'rook2') chessGame.setPiece({x: 7, y: 7}, Blk.rook2)
  if (key === 'pawn1') chessGame.setPiece({x: 6, y: 0}, Blk.pawn1)
  if (key === 'pawn2') chessGame.setPiece({x: 6, y: 1}, Blk.pawn2)
  if (key === 'pawn3') chessGame.setPiece({x: 6, y: 2}, Blk.pawn3)
  if (key === 'pawn4') chessGame.setPiece({x: 6, y: 3}, Blk.pawn4)
  if (key === 'pawn5') chessGame.setPiece({x: 6, y: 4}, Blk.pawn5)
  if (key === 'pawn6') chessGame.setPiece({x: 6, y: 5}, Blk.pawn6)
  if (key === 'pawn7') chessGame.setPiece({x: 6, y: 6}, Blk.pawn7)
  if (key === 'pawn8') chessGame.setPiece({x: 6, y: 7}, Blk.pawn8)
}