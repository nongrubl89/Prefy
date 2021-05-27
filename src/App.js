import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TailHome from "./components/TailDisplay/TailHome";
import TailEdit from "./components/TailDisplay/TailEdit";
import Add from "./components/Add";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={CardContainer} />
        <Route path="/edit/:id" component={TailEdit} />
        <Route path="/add" component={Add} />
        <Route path="/view/:id" component={TailHome} />
      </Switch>
    </Router>
  );
}

export default App;
