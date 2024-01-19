
import './App.css';
import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Homepage.js";


function App() {
  console.debug("App");

  return (
    <Router>
      <div className="App">
        <Homepage Route path="/Homepage" component={Homepage} />
      </div>
    </Router>
  );
}


export default App;
