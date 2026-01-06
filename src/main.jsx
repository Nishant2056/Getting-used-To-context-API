import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ColorStore from "./store/ColorStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorStore>
      <App />
    </ColorStore>
  </StrictMode>
);
