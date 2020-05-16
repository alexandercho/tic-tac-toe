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
  playerOnesTurn: true
};

const gameMechanics = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MOVE: {
      if (!state.board[action.payload]) {
        const boxName = action.payload
        let newBoard = state.board;
        newBoard[boxName] = state.playerOnesTurn ? 'X' : 'O';
        return {
          board: newBoard,
          playerOnesTurn: !state.playerOnesTurn
        }
      }
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
        playerOnesTurn: true
      };
    } default:
      return state;
  }
}
export default gameMechanics;
