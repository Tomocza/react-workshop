// use nextId() to generate a new unique ID when needed
import nextId from './generateId';
import Dice from './components/Dice';

function App() {
  return (
    <>
      <Dice num={3} />
    </>
  );
}

export default App;
