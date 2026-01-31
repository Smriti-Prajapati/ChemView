import { useState, useEffect } from "react";

export default function Simulation() {
  const [running, setRunning] = useState(false);
  const [temperature, setTemperature] = useState(80);
  const [pressure, setPressure] = useState(10);
  const [flow, setFlow] = useState(50);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTemperature((t) => Math.min(200, t + Math.random() * 2));
      setPressure((p) => Math.min(50, p + Math.random()));
      setFlow((f) => Math.min(200, f + Math.random() * 2));
    }, 800);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ padding: "30px", maxWidth: "900px" }}>
      <h2 style={{ fontSize: "26px", fontWeight: "700" }}>
        Chemical Process Simulation
      </h2>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setRunning(true)}
          style={{ marginRight: "10px" }}
        >
          Start Process
        </button>

        <button onClick={() => setRunning(false)}>
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
        <label>Temperature (°C): {temperature.toFixed(1)}</label>
        <input
          type="range"
          min="20"
          max="200"
          value={temperature}
          onChange={(e) => setTemperature(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Pressure (bar): {pressure.toFixed(1)}</label>
        <input
          type="range"
          min="1"
          max="50"
          value={pressure}
          onChange={(e) => setPressure(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Flow Rate (L/s): {flow.toFixed(1)}</label>
        <input
          type="range"
          min="10"
          max="200"
          value={flow}
          onChange={(e) => setFlow(Number(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          background: "#f8fafc",
        }}
      >
        <h3>Live Process Parameters</h3>
        <p>Temperature: {temperature.toFixed(1)} °C</p>
        <p>Pressure: {pressure.toFixed(1)} bar</p>
        <p>Flow Rate: {flow.toFixed(1)} L/s</p>
      </div>
    </div>
  );
}
