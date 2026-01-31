import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar">
      <NavLink to="/" end>Dashboard</NavLink>
      <NavLink to="/visualizer">Visualizer</NavLink>
      <NavLink to="/simulation">Simulation</NavLink>
      <NavLink to="/upload">CSV Upload</NavLink>
      <NavLink to="/reports">Reports</NavLink>
      <NavLink to="/history">History</NavLink>
      <NavLink to="/syllabus">Syllabus</NavLink>
    </div>
  );
}
