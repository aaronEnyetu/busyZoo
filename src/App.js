import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from 'react-router-dom';
import Admin from './Admin';
import Main from './Main';

function App() {
  return (
    <Router className="App" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;