import React from 'react';

function DiceHistory({ rollList }) {
  return rollList.length === 0 ? (
    <p>No dice rolls yet.</p>
  ) : (
    <ul>
      {rollList.map((roll) => (
        <li key={roll.id}>{roll.roll}</li>
      ))}
    </ul>
  );
}

export default DiceHistory;
