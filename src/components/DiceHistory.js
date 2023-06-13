import React from 'react';

function DiceHistory({ rollList, onSelect, onDelete }) {
  return rollList.length === 0 ? (
    <p>No dice rolls yet.</p>
  ) : (
    <ul>
      {rollList.map((roll) => (
        <li key={roll.id}>
          {roll.isSelected ? <strong>{roll.roll}</strong> : roll.roll}
          <button onClick={() => onSelect(roll.id)}>Select</button>
          <button onClick={() => onDelete(roll.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default DiceHistory;
