import React from 'react';

import { connect, useSelector, useDispatch } from "react-redux";
import { playMove} from "../redux/actions";
import { gameMechanics } from "../redux/actions";

import Col from 'react-bootstrap/Col';

export default function GameCol(id) {
  var colStyle = {
      padding: '1rem',
      fontSize: '4vw',
      border: '5px solid white',
      minHeight: '10vw'
  };
  var state = useSelector(state => state.gameMechanics)
  var player = state.playerOnesTurn;
  var dispatch = useDispatch();
  var handleOnClick = (e) => {
    dispatch(playMove(e.target.id));
  };

  return (
    <Col id={id} style={colStyle} onClick={handleOnClick}>{state.board[id]}</Col>
  )
};
