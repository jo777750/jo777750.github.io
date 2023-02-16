import { useState } from "react";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import EI from "./ExpenseItem.js";

import { XY } from "./ExpenseItem.js";
import { functionName } from "./ExpenseItem.js";
import { myVariable } from "./ExpenseItem.js";
functionName();

// import cube from "./ExpenseItem.js";
// console.log(cube(3)); // 27
alert(myVariable);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Abc />);
// root.render(<Dbc />);

const root4 = ReactDOM.createRoot(document.getElementById("Abt"));
const element4 = <AboutPage />;
root4.render(element4);

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Hello <mark>there.</mark>
        <br />
        How do you do?
      </p>

      <EI></EI>
      <EI />
      {/* below another html way with backslash for rendering child component, thats all */}
      <XY />
    </div>
  );
}

function Abc() {
  return (
    <>
      <h1>1234Hello world</h1>
      <h1>56789Hello world</h1>
      <button>act</button>
    </>
  );
}
// function Dbc(){

//   return(
//   <>
//   <h1>1234Hello world</h1>
//   <h1>56678Hello world</h1>
//   <button>act</button>
//   </>
//   )

// }
