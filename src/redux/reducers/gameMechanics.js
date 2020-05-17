import { PLAY_MOVE, NEW_GAME } from "../actionTypes";

const initialState = {
  board: {
    topLeft: '',
    top: '',
    topRight: '',
    left: '',
    middle: '',
    right: '',
    botLeft: '',
    bot: '',
    botRight: ''
  },
  playerOnesTurn: true,
  gameWinner: ''
};
function getGameWinner(board) {
  //horizontal
  if (board.topLeft === board.top && board.topLeft === board.topRight && board.top !== '') {
    return board.topLeft;
  }
  if (board.left === board.middle && board.left === board.right && board.middle !== '') {
    return board.left;
  }
  if (board.botLeft === board.top && board.botLeft === board.botRight && board.bot !== '') {
    return board.botLeft;
  }
  //vertical
  if (board.topLeft === board.left && board.topLeft === board.botLeft && board.topLeft !== '') {
    return board.topLeft;
  }
  if (board.top === board.middle && board.top === board.bot && board.top !== '') {
    return board.top;
  }
  if (board.topRight === board.right && board.topRight === board.botRight && board.topRight !== '') {
    return board.topRight;
  }

  //diagonal
  if (board.topLeft === board.middle && board.topLeft === board.botRight && board.topLeft !== '') {
    return board.topLeft;
  }
  if (board.topRight === board.middle && board.topRight === board.botLeft && board.topRight !== '') {
    return board.topRight;
  }
  return ''
};

const gameMechanics = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MOVE: {
      if (!state.board[action.payload] && state.gameWinner === '') {
        console.log('empty box clicked')
        const boxName = action.payload
        let newBoard = state.board;
        newBoard[boxName] = state.playerOnesTurn ? 'X' : 'O';

        return {
          board: newBoard,
          playerOnesTurn: !state.playerOnesTurn,
          gameWinner: getGameWinner(newBoard)
        }
      }
      console.log('non-empty box clicked')
      return state
    } case NEW_GAME: {
      return {
        board: {
          topLeft: '',
          top: '',
          topRight: '',
          left: '',
          middle: '',
          right: '',
          botLeft: '',
          bot: '',
          botRight: ''
        },
        playerOnesTurn: true,
        gameWinner: false
      };
    } default:
      return state;
  }
}
export default gameMechanics;
