import React from 'react';
import Container from 'react-bootstrap/Container';
import GameRow from './GameRow';
import NewGame from './NewGame';
import Announcer from './Announcer';

export default function Game() {
  var containerStyle = {
    width: '30%',
    margin:'0 auto'
  };

  const rows = ['topLeft','top','topRight',
    'left','middle','right',
    'botLeft','bot','botRight']

  return (
    <Container style={containerStyle}>
      <Announcer></Announcer>
      {GameRow(rows.slice(0,3))}
      {GameRow(rows.slice(3,6))}
      {GameRow(rows.slice(6,9))}
      <br></br>
      <NewGame></NewGame>
    </Container>
    );
};
