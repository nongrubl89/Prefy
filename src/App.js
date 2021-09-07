import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TailHome from "./components/TailDisplay/TailHome";
import TailEdit from "./components/TailDisplay/TailEdit";
import Add from "./components/Add";
import CardContainer from "./components/CardContainer";
import ViewCatering from "./components/TailDisplay/ViewCatering";
import ViewPassengers from "./components/TailDisplay/ViewPassengers";
import ViewCrew from "./components/TailDisplay/ViewCrew";
import EditCatering from "./components/TailDisplay/EditCatering";
import EditPassengers from "./components/TailDisplay/EditPassengers";
import EditCrew from "./components/TailDisplay/EditCrew";
import Home from "./components/Home";
import ViewCalendar from "./components/TailDisplay/ViewCalendar";
import EditCalendar from "./components/TailDisplay/EditCalendar";
import { TailContext } from "../src/components/TailContext";
import { useState } from "react";

function App() {
  const [tailValue, setTailValue] = useState(null);
  return (
    <Router>
      <Navigation />
      <TailContext.Provider value={{ tailValue, setTailValue }}>
        <Switch>
          <Route path="/view/:id/catering" component={ViewCatering} />
          <Route path="/view/:id/passengers" component={ViewPassengers} />
          <Route path="/view/:id/crew" component={ViewCrew} />
          <Route path="/view/:id/catering-edit" component={EditCatering} />
          <Route path="/view/:id/calendar-edit" component={EditCalendar} />
          <Route path="/view/:id/calendar" component={ViewCalendar} />
          <Route path="/view/:id/passengers-edit" component={EditPassengers} />
          <Route path="/view/:id/crew-edit" component={EditCrew} />
          <Route path="/edit/:id" component={TailEdit} />
          <Route path="/add" component={Add} />
          <Route path="/view/:id" component={TailHome} />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={CardContainer} />
        </Switch>
      </TailContext.Provider>
    </Router>
  );
}

export default App;
