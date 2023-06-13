// use nextId() to generate a new unique ID when needed
import nextId from './generateId';
import { useState } from 'react';
import Dice from './components/Dice';
import DiceRoller from './components/DiceRoller';
import DiceHistory from './components/DiceHistory';

function App() {
  const [currentRoll, setCurrentRoll] = useState({});
  const [rollHistory, setRollHistory] = useState([]);

  const handleRoll = (num) => {
    const newRoll = {
      roll: num,
      isSelected: false,
      id: nextId(),
    };

    setCurrentRoll(newRoll);
    rollHistory.push(newRoll);
    setRollHistory(rollHistory);
  };

  const handleSelect = (id) => {
    console.log(id);
  };

  return (
    <>
      <DiceRoller onRoll={handleRoll} />
      <Dice roll={currentRoll} />
      <DiceHistory rollList={rollHistory} onSelect={handleSelect} />
    </>
  );
}

export default App;
