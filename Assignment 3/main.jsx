import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Assignment3 from "./Assignment3.jsx"; // Importing Assignment3 instead of App

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Assignment3 />
  </StrictMode>
);
