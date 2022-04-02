import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoListProvider } from "./frontend/context/video-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoListProvider>
      <App />
    </VideoListProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
