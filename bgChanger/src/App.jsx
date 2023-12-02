import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Yellow");

  return (
    <>
      <div className="wrapper" style={{ backgroundColor: color }}>
        <button
          className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setColor("red")}
        >
          red
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setColor("blue")}
        >
          blue
        </button>
        <button
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setColor("black")}
        >
          black
        </button>
        <button
          className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setColor("orange")}
        >
          orange
        </button>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setColor("green")}
        >
          green
        </button>
        <button
          className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setColor("purple")}
        >
          purple
        </button>
        <button
          className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
      </div>
    </>
  );
}

export default App;
