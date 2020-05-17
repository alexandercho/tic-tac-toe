import React from 'react';

import { useSelector } from "react-redux";

export default function Announcer() {
  var state = useSelector(state => state.gameMechanics);
  var player = state.playerOnesTurn;
  if (state.gameWinner) {
    return (
      <h2 style={{fontSize:'2vw'}}>Player {state.gameWinner === 'X' ? '1' : '2'} wins!</h2>
      );
  }
  return (<h2 style={{fontSize:'2vw'}}>Player {player ? '1' : '2'}'s Turn</h2>);
};
