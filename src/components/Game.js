import React from 'react';

import { useSelector } from "react-redux";

import Container from 'react-bootstrap/Container';
import GameRow from './GameRow';
import NewGame from './NewGame';

export default function Game() {
  var player = useSelector(state => state.gameMechanics).playerOnesTurn;
  var containerStyle = {
    width: '33%',
    margin:'0 auto',
    height: '100vw'
  };

  const rows = ['topLeft','top','topRight',
    'left','middle','right',
    'botLeft','bot','botRight']

  return (
    <Container style={containerStyle}>
      <h1>Player {player ? '1' : '2'}'s Turn</h1>
      {GameRow(rows.slice(0,3))}
      {GameRow(rows.slice(3,6))}
      {GameRow(rows.slice(6,9))}
      <NewGame></NewGame>
    </Container>
    );
};
