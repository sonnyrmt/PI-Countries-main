import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Nav,
  NotFound,
  Home,
  Landing,
  ModalActivity,
  CountryDetail,
} from "./components";

function App() {
  const { modal_open, detailed_country } = useSelector((state) => state);

  return (
    <div className="App">
      {modal_open && <ModalActivity />}
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/countries">
          <Nav />
          <Home />
        </Route>
        {!detailed_country.msg && (
          <Route path="/countries/:id">
            <Nav />
            <CountryDetail />
          </Route>
        )}
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
