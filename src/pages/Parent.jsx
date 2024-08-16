import React, { useState } from "react";
import "../styles/styles.css";
import Home from "./Home";
import { BiCalendar, BiHome, BiPlus } from "react-icons/bi";
import Calender from "./Calender";
import { Tooltip } from "antd";

function Parent() {
  const [active, setActive] = useState("home");
  const NAV = ["Home", "Calender"];
  const mainContent = () => {
    if (active === "home") return <Home />;
    else if (active === "calender") return <Calender />;
  };
  return (
    <div id="parent">
      <div className="mainContent">{active && mainContent()}</div>
      <nav className="navbar">
        <Tooltip title="Add a todo" placement="right">
          <button>
            <BiPlus className="add" color="white" size="2em" />
          </button>
        </Tooltip>
        <ul onClick={e => setActive(e.target.className)}>
          <li className={active === "home" ? "home active" : "home"}>
            <BiHome color={active === "home" && "red"} /> Home
          </li>
          <li
            className={active === "calender" ? "calender active" : "calender"}
          >
            <BiCalendar color={active === "calender" && "red"} /> Calender
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Parent;
