import { Routes, Route } from "react-router-dom";
import TopBar from "./layout/TopBar";
import SideBar from "./layout/SideBar";

import Dashboard from "./pages/Dashboard";
import Visualizer from "./pages/Visualizer";
import Simulation from "./pages/Simulation";
import Upload from "./pages/Upload";
import Reports from "./pages/Reports";
import History from "./pages/History";
import Syllabus from "./pages/Syllabus";

export default function App() {
  return (
    <div className="app-container">
      <TopBar />
      <div className="main-layout">
        <SideBar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/visualizer" element={<Visualizer />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/history" element={<History />} />
            <Route path="/syllabus" element={<Syllabus />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
