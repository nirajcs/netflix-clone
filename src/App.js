import React from "react";
import './App.css'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { actionURL, comedyURL, documentaryURL, horrorURL, originalsURL, romanceURL } from "./urls";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originalsURL} title='Netflix Originals'/>
      <RowPost url={actionURL} title='Action' isSmall/>
      <RowPost url={comedyURL} title='Comedy' isSmall/>
      <RowPost url={horrorURL} title='Horror' isSmall/>
      <RowPost url={romanceURL} title='Romance' isSmall/>
      <RowPost url={documentaryURL} title='Documentary' isSmall/>
    </div>
  );
}

export default App;
