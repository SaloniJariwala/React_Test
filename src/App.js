import './App.css';
import 'antd/dist/antd.css';
import Calender from "./Components/Calender";
import React, {useEffect, useState} from "react";
import axios from "axios";

function App() {

  return (
    <div className="App">
      <Calender />
    </div>
  );
}

export default App;
