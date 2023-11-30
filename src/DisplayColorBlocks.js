import React from "react";

const ColorObj = [
  { tailwindClass: "bg-green-500", hex: "#22c55e", colorName: "Green" },
  { tailwindClass: "bg-rose-800", hex: "#be123c", colorName: "Rose" },
  { tailwindClass: "bg-blue-500", hex: "#3b82f6", colorName: "Blue" },
  { tailwindClass: "bg-slate-500", hex: "#64748b", colorName: "Grey" },
  { tailwindClass: "bg-cyan-500", hex: "#06b6d4", colorName: "Cyan" },
  { tailwindClass: "bg-pink-400", hex: "#f472b6", colorName: "Pink" },
  { tailwindClass: "bg-violet-400", hex: "#a78bfa", colorName: "Violet" },
  { tailwindClass: "bg-teal-500", hex: "#14b8a6", colorName: "Teal" },
  { tailwindClass: "bg-lime-500", hex: "#365314", colorName: "Olive" },
  { tailwindClass: "bg-emerald-400", hex: "#34d399", colorName: "Emerald" },
  { tailwindClass: "bg-sky-300", hex: "#7dd3fc", colorName: "Sky" },
];

function DisplayColorBlocks({ setbgColor }) {
  function handle(toSetColor) {
    setbgColor(toSetColor);
  }

  return (
    <div>
      {ColorObj.map((color) => (
        <button
          key={color.colorName}
          className={`${color.tailwindClass} p-10 m-10 border-2 rounded-lg w-30`}
          onClick={() => handle(color.hex)}
        >
          {color.colorName}
        </button>
      ))}
    </div>
  );
}

export default DisplayColorBlocks;
