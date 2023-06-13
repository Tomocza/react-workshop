import React from 'react';

function DiceHistory({ rollList, onSelect }) {
  return rollList.length === 0 ? (
    <p>No dice rolls yet.</p>
  ) : (
    <ul>
      {rollList.map((roll) => (
        <li key={roll.id}>
          {roll.isSelected ? <strong>{roll.roll}</strong> : roll.roll}
          <button onClick={() => onSelect(roll.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
}

export default DiceHistory;
