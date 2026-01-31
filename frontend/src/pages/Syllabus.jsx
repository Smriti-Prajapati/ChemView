export default function Syllabus() {
  return (
    <div className="panel">

      {/* TITLE */}
      <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "6px" }}>
        ChemView Learning Syllabus
      </h2>

      {/* INTRO */}
      <p style={{ color: "#475569", marginBottom: "20px", fontSize: "15px" }}>
        This section covers the core topics related to Chemical Equipment,
        Process Engineering, and Industrial Automation used in ChemView.
      </p>

      {/* SYLLABUS SECTIONS */}
      <Section
        title="1. Process Equipment"
        items={[
          "Pumps – Types, Working, Performance Curves",
          "Valves – Control, Safety, Flow Regulation",
          "Reactors – Batch, CSTR, PFR",
          "Compressors – Centrifugal, Reciprocating",
          "Heat Exchangers – Shell & Tube, Plate Type",
        ]}
      />

      <Section
        title="2. Process Parameters"
        items={[
          "Temperature Measurement and Control",
          "Pressure Sensors and Safety Limits",
          "Flow Rate Measurement",
        ]}
      />

      <Section
        title="3. Data Analysis"
        items={[
          "CSV Data Handling",
          "Statistical Averages",
          "Equipment Performance Trends",
        ]}
      />

      <Section
        title="4. Industrial Software Concepts"
        items={[
          "SCADA & Monitoring Systems",
          "Dashboard Design",
          "Report Generation (PDF)",
        ]}
      />

      <Section
        title="5. Project Implementation"
        items={[
          "Frontend: React + Visualization",
          "Backend: Django REST API",
          "Database: Equipment History Storage",
          "Authentication & Security",
        ]}
      />

      {/* FOOTER NOTE */}
      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          background: "#f8fafc",
          borderLeft: "5px solid #2563eb",
          borderRadius: "6px",
          color: "#1e293b",
          fontWeight: "600",
        }}
      >
        ChemView helps students visualize real chemical plant data and learn
        industrial monitoring concepts in a practical, industry-oriented way.
      </div>
    </div>
  );
}

/* Reusable section component */
function Section({ title, items }) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "700",
          color: "#1e293b",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <ul
        style={{
          paddingLeft: "18px",
          color: "#334155",
          lineHeight: "1.7",
        }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
