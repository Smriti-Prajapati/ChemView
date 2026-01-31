import { useState } from "react";

const equipmentData = {
  Pump: { temp: 65, pressure: 10, flow: 40, status: "Running" },
  Valve: { temp: 45, pressure: 8, flow: 20, status: "Open" },
  Reactor: { temp: 120, pressure: 20, flow: 60, status: "Active" },
  Compressor: { temp: 90, pressure: 18, flow: 55, status: "Compressing" },
  "Heat Exchanger": { temp: 70, pressure: 12, flow: 45, status: "Cooling" },
};

export default function Visualizer() {
  const [selected, setSelected] = useState("Pump");

  return (
    <div className="visualizer-container">

      {/* PAGE TITLE */}
      <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "24px" }}>
        Chemical Equipment Visualizer
      </h2>

      {/* EQUIPMENT BUTTONS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {Object.keys(equipmentData).map((eq) => (
          <div
            key={eq}
            onClick={() => setSelected(eq)}
            className={`equipment-box ${selected === eq ? "active" : ""}`}
            style={{ textAlign: "center" }}
          >
            {eq}
          </div>
        ))}
      </div>

      {/* DETAILS PANEL */}
      <div className="equipment-info">
        <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
          {selected} Details
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
            fontSize: "16px",
          }}
        >
          <div>
            <strong>Temperature:</strong><br />
            {equipmentData[selected].temp} °C
          </div>

          <div>
            <strong>Pressure:</strong><br />
            {equipmentData[selected].pressure} bar
          </div>

          <div>
            <strong>Flow Rate:</strong><br />
            {equipmentData[selected].flow} L/s
          </div>

          <div>
            <strong>Status:</strong><br />
            {equipmentData[selected].status}
          </div>
        </div>
      </div>

    </div>
  );
}
