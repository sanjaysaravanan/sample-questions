import React from "react";
import "./App.css";

function App() {
  const data = [
    {
      name: "Sanjay",
      subject: "Maths",
      marks: 95,
    },
    {
      name: "Sanjay",
      subject: "English",
      marks: 85,
    },
    {
      name: "Sam",
      subject: "Maths",
      marks: 90,
    },
    {
      name: "Sam",
      subject: "English",
      marks: 92,
    },
  ];
  return (
    <div style={{ margin: "50px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="text"
          placeholder="Search for a name..."
          style={{ height: "40px" }}
        />
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid",
              margin: "10px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            All
          </div>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid",
              margin: "10px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            Maths
          </div>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid",
              margin: "10px",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            English
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <table>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
          {data.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
