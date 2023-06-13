import React from 'react';

function DiceRoller({ onRoll }) {
  return <button onClick={() => onRoll(getRandomInt(6) + 1)}>Roll!</button>;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default DiceRoller;
