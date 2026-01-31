import { useEffect, useState } from "react";
import { getHistory } from "../services/api";

export default function History() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getHistory()
      .then(setRecords)
      .catch(err => console.error("History load failed:", err));
  }, []);

  return (
    <div className="panel">

      {/* TITLE */}
      <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "6px" }}>
        Upload History
      </h2>

      {/* DESCRIPTION */}
      <p style={{ color: "#475569", marginBottom: "20px", fontSize: "15px" }}>
        View previously uploaded equipment CSV files along with calculated
        process parameters and upload timestamps.
      </p>

      {/* EMPTY STATE */}
      {records.length === 0 ? (
        <div
          style={{
            background: "#f8fafc",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #e2e8f0",
            color: "#64748b",
          }}
        >
          No previous uploads found.
        </div>
      ) : (

        /* TABLE CARD */
        <div
          style={{
            overflowX: "auto",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr style={{ background: "#2563eb", color: "white" }}>
                <th style={th}>File Name</th>
                <th style={th}>Temperature (°C)</th>
                <th style={th}>Pressure (bar)</th>
                <th style={th}>Flow Rate (L/s)</th>
                <th style={th}>Total Equipment</th>
                <th style={th}>Uploaded At</th>
              </tr>
            </thead>

            <tbody>
              {records.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #e2e8f0",
                    background: index % 2 === 0 ? "#f8fafc" : "white",
                  }}
                >
                  <td style={td}>{item.file_name}</td>
                  <td style={{ ...td, textAlign: "center" }}>
                    {item.avg_temperature.toFixed(2)}
                  </td>
                  <td style={{ ...td, textAlign: "center" }}>
                    {item.avg_pressure.toFixed(2)}
                  </td>
                  <td style={{ ...td, textAlign: "center" }}>
                    {item.avg_flowrate.toFixed(2)}
                  </td>
                  <td style={{ ...td, textAlign: "center" }}>
                    {item.total_count}
                  </td>
                  <td style={{ ...td, textAlign: "center" }}>
                    {new Date(item.uploaded_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* Inline styles for consistency */
const th = {
  padding: "14px",
  textAlign: "left",
  fontWeight: "600",
  whiteSpace: "nowrap",
};

const td = {
  padding: "12px 14px",
  whiteSpace: "nowrap",
};
