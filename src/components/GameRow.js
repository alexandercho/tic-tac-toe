import React from 'react';

import Row from 'react-bootstrap/Row';
import GameCol from './GameCol';

export default function GameRow(cols) {
  return (
    <Row>
      {cols.map(col => GameCol(col))}
    </Row>
  )};
