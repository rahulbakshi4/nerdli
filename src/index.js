import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoListProvider } from "./frontend/context/video-context";
import { AuthProvider } from "./frontend/context/auth-context";
import { WatchLaterProvider } from "./frontend/context/watchlater-context";
import { LikesProvider } from "./frontend/context/likes-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <LikesProvider>
        <WatchLaterProvider>
          <VideoListProvider>
            <App />
          </VideoListProvider>
        </WatchLaterProvider>
      </LikesProvider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
