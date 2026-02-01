export default function Reports() {

  const downloadReport = () => {
    window.open("https://chemview.onrender.com/api/report/", "_blank");
  };

  return (
    <div className="panel" style={{ maxWidth: "900px" }}>

      {/* TITLE */}
      <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "10px" }}>
        ChemView Reports Center
      </h2>

      {/* DESCRIPTION */}
      <p style={{ color: "#475569", marginBottom: "24px", fontSize: "15px" }}>
        Generate and download the latest equipment analysis report in PDF format.
        The report contains summary statistics, averages, and equipment type distribution.
      </p>

      {/* REPORT CARD */}
      <div
        style={{
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h3 style={{ fontSize: "20px", marginBottom: "6px" }}>
            Equipment CSV Analysis Report
          </h3>
          <p style={{ color: "#64748b", fontSize: "14px" }}>
            Includes averages, totals, and equipment distribution
          </p>
        </div>

        <button
          onClick={downloadReport}
          style={{
            padding: "12px 22px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Download PDF Report
        </button>
      </div>

    </div>
  );
}
