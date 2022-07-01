import { useEffect, useState } from 'react'; 
import './App.css';
import OpenClosedSign from './OpenClosedSign';
import AnimalList from './AnimalList';



import CustomButton from './CustomButton';

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


  const [zooName, setZooName] = useState('Zoo Adventures');
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadStuff() {
      const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex?page=3&perPage=50');
      const people = await res.json();

      console.log(people.results);
      setData(people.results);
    }

    loadStuff();
  }, []);

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
  function handleShrinkGorillaClick() {
    if (gorillaSize > 5) {
      setGorillaSize(gorillaSize - 1);
    }
  }

  return (
    <div className="App">
      <h5>Welcome to {zooName}, the App for animal lovers</h5>
      <input onChange={e => setZooName(e.target.value)} placeholder='type zoo name here' />
      
      {
        data?.map((person, i) => <p key={person.pokemon + i}>{person.pokemon}</p>)
      }
      <div className="fight">
        <div className='wild'>
          {/* the width of the gorilla should be ten times whatever the gorilla size is in state */}
          {/* <img src="gorilla.png" width={10 * gorillaSize} /> */}
          <p style={{ fontSize: `${gorillaSize}px` }}>{gorillaSize > 5 ? <img src='./gorillaEating.png'/> : <img src='./gorillaHungry.png' />}</p>
          <div className='buttons'>
            {/* when you click this button, the gorilla's size in state should go up by one */}
            <CustomButton onClick={() => setGorillaSize(gorillaSize + 1)}>Free and feed the Gorilla</CustomButton>
            {/* when you click this button, the gorilla's size in state should go down by one */}
            {/* <button onClick={() => setGorillaSize(gorillaSize - 1)}>Lock the Gorilla in the cage </button> */}
            <CustomButton onClick={handleShrinkGorillaClick}>Shrink Gorilla</CustomButton>
          </div>
        </div>
        <div className='wild'>
          {/* the width of the lion should be ten times whatever the gorilla size is in state */}
          <img src="lion.jpg" width={10 * lionSize} />
          <div className="buttons">
            {/* when you click this button, the lion's size in state should go up by one */}
            <button onClick={() => setLionSize(lionSize + 1)}>Roaring lion is ready to pounce</button>
            {/* when you click this button, the gorilla's size in state should go down by one */}
            <CustomButton onClick={() => setLionSize(lionSize - 1)}>Diminishing chances of surviving </CustomButton>
          </div>
        </div>
      </div>
      <OpenClosedSign zooIsOpen={zooIsOpen} />
      <button onClick={() => setZooIsOpen(!zooIsOpen)}>Toggle Zoo</button>

      <AnimalList animals={animals} />
      <CustomButton onClick={handleElephantClick}>Add Elephant</CustomButton>
      <CustomButton onClick={handleBuffaloClick}>Add Buffalo</CustomButton>
      <CustomButton onClick={handleRhinoClick}>Add Rhino</CustomButton>
      <CustomButton onClick={handleLeopardClick}>Add Leopard</CustomButton>
      <CustomButton onClick={handleOstrichClick}>Add Ostrich</CustomButton>
      <CustomButton onClick={handleRetireAnimal}>Retire last animal</CustomButton>
    </div>
     
  );
}

export default App;
