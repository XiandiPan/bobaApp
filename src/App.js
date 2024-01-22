import './App.css';
import React from "react"
import {BrowserRouter as Router} from "react-router-dom";
import Homepage from './Homepage.js';
import RoutesList from './RoutesList';



function App() {
  console.debug("App");
  return (
    <Router>
      <div className="App">
        {/* <Homepage /> */}
        <RoutesList />
      </div>
    </Router>
  );
}


export default App;
