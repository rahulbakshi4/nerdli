import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoListProvider } from "./frontend/context/video-context";
import { AuthProvider } from "./frontend/context/auth-context";
import { WatchLaterProvider } from "./frontend/context/watchlater-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <WatchLaterProvider>
        <VideoListProvider>
          <App />
        </VideoListProvider>
      </WatchLaterProvider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
