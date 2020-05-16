import { PLAY_MOVE, NEW_GAME} from "./actionTypes";

export const playMove = (boxName) => ({
  type: PLAY_MOVE,
  payload: boxName
});

export const newGame = () => ({
  type: NEW_GAME
});
