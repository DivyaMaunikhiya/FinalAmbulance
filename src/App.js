import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Fighter from "./components/Fighter";
class App extends Component {

  render() {
    return (
<>
        <NavBar></NavBar>
         <Fighter/>

</>
    );
  }
}
export default App;
