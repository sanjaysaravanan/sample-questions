import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      name: "One",
    },
    {
      name: "Two",
    },
    {
      name: "Three",
    },
    {
      name: "Four",
    },
    {
      name: "Five",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "1000px",
          margin: "50px",
        }}
      >
        {data.map((item, i) => (
          <div>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
      <div
        style={{
          margin: "50px",
          width: "1000px",
          overflowY: "auto",
          height: "500px",
          border: "1px solid",
        }}
      >
        {data.map((item) => (
          <div
            style={{
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
