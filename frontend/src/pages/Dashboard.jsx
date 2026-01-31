import { useEffect, useState } from "react";
import { getSummary } from "../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getSummary().then(setData).catch(console.error);
  }, []);

  if (!data) return <h2>Loading ChemView Dashboard...</h2>;

  const cards = [
    { title: "Temperature (°C)", value: data.avg_temperature },
    { title: "Pressure (bar)", value: data.avg_pressure },
    { title: "Flow Rate (L/s)", value: data.avg_flowrate },
    { title: "Total Equipment", value: data.total_count },
  ];

  const chartData = Object.entries(data.type_distribution).map(([name, value]) => ({
    name,
    count: value,
  }));

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>ChemView Control Center</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "15px", marginTop: "20px" }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: "#0f172a", color: "white", padding: "20px", borderRadius: "10px" }}>
            <h4>{c.title}</h4>
            <h1 style={{ fontSize: "28px" }}>{c.value}</h1>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "40px", background: "white", padding: "20px", borderRadius: "10px" }}>
        <h3>Equipment Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
