import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import CountryDetail from "./components/countryDetail/CountryDetail";
import { useSelector } from "react-redux";
import ModalActivity from "./components/modalActivity/ModalActivity";
import NotFound from "./components/NotFound/NotFound"

function App() {
  const { modal_open, detailed_country } = useSelector((state) => state);

  return (
    <div className="App">
      {modal_open === true ? <ModalActivity /> : null}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/countries">
          <Nav />
          <Home />
        </Route>
        {!detailed_country.msg ? (
          <Route path="/countries/:id">
            <Nav />
            <CountryDetail />
          </Route>
        ) : (<NotFound/>)}
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
