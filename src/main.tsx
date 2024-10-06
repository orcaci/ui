import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./style.css";
import Dashboard from "./components/dashboard-03";
// import { Dashboard } from "./page/dashboard.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Dashboard />
  </StrictMode>,
);
