import { useState } from "react";

export default function Simulation() {
  const [running, setRunning] = useState(false);
  const [temperature, setTemperature] = useState(80);
  const [pressure, setPressure] = useState(10);
  const [flow, setFlow] = useState(50);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Chemical Process Simulation</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setRunning(true)}>Start Process</button>
        <button onClick={() => setRunning(false)} style={{ marginLeft: "10px" }}>
          Stop Process
        </button>
      </div>

      <p style={{ marginTop: "10px" }}>
        Status:{" "}
        <b style={{ color: running ? "green" : "red" }}>
          {running ? "RUNNING" : "STOPPED"}
        </b>
      </p>

      <div style={{ marginTop: "30px" }}>
        <label>Temperature (°C): {temperature}</label>
        <input
          type="range"
          min="20"
          max="200"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Pressure (bar): {pressure}</label>
        <input
          type="range"
          min="1"
          max="50"
          value={pressure}
          onChange={(e) => setPressure(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Flow Rate (L/s): {flow}</label>
        <input
          type="range"
          min="10"
          max="200"
          value={flow}
          onChange={(e) => setFlow(e.target.value)}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginTop: "30px", padding: "15px", border: "1px solid #ccc" }}>
        <h3>Live Process Parameters</h3>
        <p>Temperature: {temperature} °C</p>
        <p>Pressure: {pressure} bar</p>
        <p>Flow Rate: {flow} L/s</p>
      </div>
    </div>
  );
}
