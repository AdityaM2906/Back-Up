import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const [pholder, currentTime] = useState(now);

  function getTime() {
    const newTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    return currentTime(newTime);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{pholder}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
