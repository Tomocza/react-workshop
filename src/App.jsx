// use nextId() to generate a new unique ID when needed
import nextId from './generateId';
import Dice from './components/Dice';
import DiceRoller from './components/DiceRoller';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState(-1);

  const handleRoll = (num) => {
    setCurrentNumber(num);
  };

  return (
    <>
      <Dice num={currentNumber} />
      <DiceRoller onRoll={handleRoll} />
    </>
  );
}

export default App;
