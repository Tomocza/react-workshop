// use nextId() to generate a new unique ID when needed
import nextId from './generateId';
import Dice from './components/Dice';
import DiceRoller from './components/DiceRoller';
import { useState } from 'react';

function App() {
  const [currentRoll, setCurrentRoll] = useState(-1);

  const handleRoll = (num) => {
    setCurrentRoll(num);
  };

  return (
    <>
      <Dice num={currentRoll} />
      <DiceRoller onRoll={handleRoll} />
    </>
  );
}

export default App;
