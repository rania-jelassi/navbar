import React from "react";
import "./Navwork.css";

function Navwork(Tab) {
  return (
    <div>
      <ul className="navmenu">
        {Tab.arr.map(el => (
          < li className={el.subMenu?'withdrop':''}>
            {el.menu} {el.subMenu && (<ul className="dropdown"> {el.subMenu.map(x => (<li><a>{x}</a></ li>))} </ul>)}
          </li>
        ))}
      </ul>     
    </div>
  );
}
export default Navwork;
