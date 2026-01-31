export default function TopBar() {
  return (
    <div className="topbar" style={{ height: "52px", padding: "0 20px" }}>
      <h1 style={{ fontSize: "18px", fontWeight: "600" }}>
        ChemView — Chemical Equipment Parameter Visualizer
      </h1>
      <span
        className="status"
        style={{ fontSize: "12px", fontWeight: "500" }}
      >
        ● SYSTEM ONLINE
      </span>
    </div>
  );
}
