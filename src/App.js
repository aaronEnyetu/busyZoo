import { useState } from 'react'; 
import './App.css';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';

function App() {
// tracking the state with useState hooks:
//zooIsOpen should be a boolean that starts out as 'true'
  const [zooIsOpen, setZooIsOpen] = useState(true);
//gorillaSize should be a number that starts out as 10
  const [gorillaSize, setGorillaSize] = useState(10);
//lionSize should be a number that starts out as 10
  const [lionSize, setLionSize] = useState(10);
//animal parade should be an array of strings that starts out as [giraffe, antelope, buffalo, elephant, leopard, rhino, lion, gorilla, ostrich ]
  const [animals, setAnimals] = useState (['elephant', 'buffalo', 'rhino', 'leopard', 'ostrich']);

  function handleElephantClick() {
    animals.push('elephant');
    setAnimals(animals.slice());
  }
  function handleBuffaloClick() {
    animals.push('buffalo');
    setAnimals(animals.slice());
  }
  function handleRhinoClick() {
    animals.push('rhino');
    setAnimals(animals.slice());
  }
  function handleLeopardClick() {
    animals.push('leopard');
    setAnimals(animals.slice());
  }
  function handleOstrichClick() {
    animals.push('ostrich');
    setAnimals(animals.slice());
  }
  function handleRetireAnimal() {
    animals.pop();
    setAnimals(animals.slice());
  }

  return (
    <div className="App">
      <div className="fight">
        <div className='wild'>
          {/* the width of the gorilla should be ten times whatever the gorilla size is in state */}
          <img src="gorilla.png" width={10 * gorillaSize} />
          <div className='buttons'>
            {/* when you click this button, the gorilla's size in state should go up by one */}
            <button onClick={() => setGorillaSize(gorillaSize + 1)}>Growling gorilla is ready to charge</button>
            {/* when you click this button, the gorilla's size in state should go down by one */}
            <button onClick={() => setGorillaSize(gorillaSize - 1)}>Diminishing chances of surviving </button>
          </div>
        </div>
        <div className='wild'>
          {/* the width of the lion should be ten times whatever the gorilla size is in state */}
          <img src="lion.jpg" width={10 * lionSize} />
          <div className="buttons">
            {/* when you click this button, the lion's size in state should go up by one */}
            <button onClick={() => setLionSize(lionSize + 1)}>Roaring lion is ready to pounce</button>
            {/* when you click this button, the gorilla's size in state should go down by one */}
            <button onClick={() => setLionSize(lionSize - 1)}>Diminishing chances of surviving </button>
          </div>
        </div>
      </div>
      <OpenClosedSign zooIsOpen={zooIsOpen} />
      <button onClick={() => setZooIsOpen(!zooIsOpen)}>Toggle Zoo</button>

      <AnimalList animals={animals} />
      <button onClick={handleElephantClick}>Add Elephant</button>
      <button onClick={handleBuffaloClick}>Add Buffalo</button>
      <button onClick={handleRhinoClick}>Add Rhino</button>
      <button onClick={handleLeopardClick}>Add Leopard</button>
      <button onClick={handleOstrichClick}>Add Ostrich</button>
      <button onClick={handleRetireAnimal}>Retire last animal</button>
    </div>
     
  );
}

export default App;
