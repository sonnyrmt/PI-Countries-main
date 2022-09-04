import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing'
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import CountryDetail from './components/countryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/countries'>
          <Nav />
          <Home />
        </Route>
        <Route path='/countries/:id'>
          <Nav />
          <CountryDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
