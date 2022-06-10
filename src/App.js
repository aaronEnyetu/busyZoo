import { useState } from 'react'; 
import './App.css';
import OpenClosedSign from './OpenClosedSign';

function App() {
// tracking the state with useState hooks:
//LightSign should be a string that starts out as 'green'
  const [LightSign, setLightSign] = useState('green');
//gorillaSize should be a number that starts out as 10
  const [gorillaSize, setGorillaSize] = useState(10);
//lionSize should be a number that starts out as 10
  const [lionSize, setLionSize] = useState(10);
//animal parade should be an array of strings that starts out as [giraffe, antelope, buffalo, elephant, leopard, rhino, lion, gorilla, ostrich ]
  const [animals, setAnimals] = useState (['elephant', 'buffalo', 'rhino', 'leopard', 'ostrich']);

  

  return (
    <div className="App">
      <div className="fight">
        <div className='wild'>
          {/* the width of the gorilla should be ten times whatever the gorilla size is in state */}
          <img src="gorilla.png" width={10 * gorillaSize} />
          <div className='buttons'>
            {/* when you click this button, the gorilla's size in state should go up by one */}
            <button onClick={() => setGorillaSize(gorillaSize + 1)}>Angry gorilla is charging up</button>
            {/* when you click this button, the gorilla's size in state should go down by one */}
            <button onClick={() => setGorillaSize(gorillaSize - 1)}>The gorilla is getting defeated</button>
          </div>
        </div>
        <div className='wild'>
          {/* the width of the lion should be ten times whatever the gorilla size is in state */}
          <img src="lion.jpg" width={10 * lionSize} />
          <div className="buttons">
            {/* when you click this button, the lion's size in state should go up by one */}
            <button onClick={() => setLionSize(lionSize + 1)}>Angry lion is charging up</button>
            {/* when you click this button, the gorilla's size in state should go down by one */}
            <button onClick={() => setLionSize(lionSize - 1)}>The lion is getting defeated</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
