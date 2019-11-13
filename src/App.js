import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navwork from "./Navwork";

const Tab = [{menu:"Home"}, {menu:"Services", subMenu:["For entrepreneurs", "For students", "For hobbyists"]}, {menu:"Contact"}];

function App() {
  return <div >
   <Navwork arr={Tab}/>;
   </div>
} 
export default App;
