import { PLAY_MOVE } from "./actionTypes";

export const playMove = (boxName) => ({
  type: PLAY_MOVE,
  payload: boxName
});
