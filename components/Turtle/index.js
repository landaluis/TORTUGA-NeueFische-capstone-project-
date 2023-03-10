/* import React, { useState } from "react";
import "./styles.css";

const pixelArray = [

];

function Canvas() {
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);

  function handleGenerateClick() {
    if (currentArrayIndex >= pixelArray.length) {
      console.log("All arrays generated");
      return;
    }
    setCurrentArrayIndex(currentArrayIndex + 1);
  }

  const pixelRows = pixelArray.slice(0, currentArrayIndex).map((row, i) => (
    <div key={i} className="pixel-row">
      {row.map((color, j) => (
        <div key={j} className="pixel" style={{ backgroundColor: color }} />
      ))}
    </div>
  ));

  return (
    <>
      <div className="canvas">{pixelRows.reverse()}</div>
      <button onClick={handleGenerateClick}>Generate Pixel Art</button>
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <Canvas />
    </div>
  );
}
*/
