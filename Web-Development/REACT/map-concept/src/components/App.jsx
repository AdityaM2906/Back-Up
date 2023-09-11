import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";

function emojipediaf(info) {
  return (
    <Card
      key={info.id}
      emoji={info.emoji}
      name={info.name}
      meaning={info.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojipediaf)}</dl>
    </div>
  );
}

export default App;
