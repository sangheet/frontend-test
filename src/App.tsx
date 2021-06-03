import "./App.css";
import { Home } from "./views/Home";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import { ItemDetails } from "./views/ItemDetails";

function App() {
  return (
    <Router>
      <AnimatedSwitch
        atEnter={{ opacity: 0, zoom: 1 }}
        atLeave={{ opacity: 0, zoom: 1 }}
        atActive={{ opacity: 1, zoom: 0 }}
      >
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/item-details/:id" exact>
          <ItemDetails />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
