import { useState } from "react";
import { uploadCSV } from "../services/api";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a CSV file first");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await uploadCSV(file);
      setResult(data);
    } catch (err) {
      setError("Upload failed. Check server or file format.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="panel" style={{ maxWidth: "1000px" }}>

      {/* TITLE */}
      <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "20px" }}>
        CSV Equipment Data Upload
      </h2>

      {/* UPLOAD FORM */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files[0])}
          style={{
            padding: "8px",
            border: "1px solid #cbd5e1",
            borderRadius: "6px",
            background: "#fff",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {loading ? "Uploading..." : "Upload CSV"}
        </button>
      </form>

      {/* ERROR */}
      {error && (
        <div style={{ color: "#dc2626", marginBottom: "16px" }}>
          {error}
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div className="panel">

          <h3 style={{ fontSize: "22px", marginBottom: "16px" }}>
            Upload Summary
          </h3>

          {/* STATS GRID */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <div>
              <strong>Total Records</strong><br />
              {result.total_count}
            </div>

            <div>
              <strong>Average Temperature</strong><br />
              {result.avg_temperature} °C
            </div>

            <div>
              <strong>Average Pressure</strong><br />
              {result.avg_pressure} bar
            </div>

            <div>
              <strong>Average Flowrate</strong><br />
              {result.avg_flowrate} L/s
            </div>
          </div>

          {/* DISTRIBUTION */}
          <h4 style={{ marginBottom: "10px" }}>Equipment Types</h4>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "10px",
            }}
          >
            {Object.entries(result.type_distribution).map(([k, v]) => (
              <div
                key={k}
                style={{
                  background: "#f1f5f9",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <strong>{k}</strong>: {v}
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
