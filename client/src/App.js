import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing'
import Nav from './components/nav/Nav';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/countries'>
          <Nav />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
