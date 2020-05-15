import React from 'react';

import { connect, useSelector, useDispatch } from "react-redux";
import { playMove} from "../redux/actions";
import { gameMechanics } from "../redux/actions";

import Row from 'react-bootstrap/Row';
import GameCol from './GameCol';

export default function GameRow(cols) {
  return (
    <Row>
      {cols.map(col => GameCol(col))}
    </Row>
  )};
