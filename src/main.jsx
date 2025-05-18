import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./common/ThemeContext.jsx";

// Lazy load the App component
const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
