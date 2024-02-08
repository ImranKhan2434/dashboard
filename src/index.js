import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import {
  StateContextProvider,
  NodeContextProvider,
} from "./contexts/ContextProvider";

const reactContainer = ReactDOM.createRoot(document.getElementById("root"));
reactContainer.render(
  <StateContextProvider>
    <NodeContextProvider>
      <App />
    </NodeContextProvider>
  </StateContextProvider>
);
