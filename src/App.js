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

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/view/:id/catering" component={ViewCatering} />
        <Route path="/view/:id/passengers" component={ViewPassengers} />
        <Route path="/view/:id/crew" component={ViewCrew} />
        <Route path="/view/:id/catering-edit" component={EditCatering} />
        <Route path="/view/:id/passengers-edit" component={EditPassengers} />
        <Route path="/view/:id/crew-edit" component={EditCrew} />
        <Route path="/edit/:id" component={TailEdit} />
        <Route path="/add" component={Add} />
        <Route path="/view/:id" component={TailHome} />
        <Route path="/" component={CardContainer} />
      </Switch>
    </Router>
  );
}

export default App;
