import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Characters } from "./Components/Characters";
import { Locations } from "./Components/Locations";
import { Episodes } from "./Components/Episodes";
import { Card } from "./Components/Card";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Card />
        <Route path="/characters/">
          <Characters />
        </Route>
        <Route path="/locations/">
          <Locations />
        </Route>
        <Route path="/episodes/">
          <Episodes />
        </Route>
      </Router>
    </div>
  );
}

export default App;
