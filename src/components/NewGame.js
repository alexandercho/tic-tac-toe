import React from 'react';

import { useSelector, useDispatch } from "react-redux";
import { newGame} from "../redux/actions";

import Button from 'react-bootstrap/Button';

export default function NewGame() {
  var board = useSelector(state => state.gameMechanics).board;
  var dispatch = useDispatch();
  var handleOnClick = (e) => {
    dispatch(newGame());
    function clearBox(box) {
      document.getElementById(box).innerHTML = ''
    }
    Object.keys(board).map(clearBox)
  };

  return (
    <Button onClick={handleOnClick}>New Game</Button>
    );
};
