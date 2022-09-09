import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import { Header } from "./Header";
import { Route } from "./Route";
// import Accordion from "./Accordion";
import { Search } from "./Search";
import { Translate } from "./Translate";

const items = [
  {
    title: "What is React?",
    content: "React is front-end JavaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="App">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <Translate /> */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
