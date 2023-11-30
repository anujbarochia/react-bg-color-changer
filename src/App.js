import React, { useState } from "react";
import DisplayColorBlocks from "./DisplayColorBlocks";

function App() {
  const [bgColor, setbgColor] = useState("Orange");

  return (
    <div
      className="text-center h-screen w-screen"
      style={{ backgroundColor: bgColor }}
    >
      <br />
      <div className="py-10 mx-20 border-4 border-double rounded-3xl border-orange-950 my-10">
        <h1 className="text-bold text-2xl">This is Background Changer</h1>
        <br />
        <p className="bg-slate-400 h-8">
          Click Below to change the{" "}
          <span className="text-xl">Background colour</span>
        </p>
      </div>

      <DisplayColorBlocks setbgColor={setbgColor} />
    </div>
  );
}

export default App;
