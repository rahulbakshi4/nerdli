import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoListProvider } from "./frontend/context/video-context";
import { AuthProvider } from "./frontend/context/auth-context";
import { WatchLaterProvider } from "./frontend/context/watchlater-context";
import { LikesProvider } from "./frontend/context/likes-context";
import { HistoryProvider } from "./frontend/context/history-context";
import { PlaylistProvider } from "./frontend/context/playlist-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PlaylistProvider>
        <HistoryProvider>
          <LikesProvider>
            <WatchLaterProvider>
              <VideoListProvider>
                <App />
              </VideoListProvider>
            </WatchLaterProvider>
          </LikesProvider>
        </HistoryProvider>
      </PlaylistProvider>
    </AuthProvider>

  </React.StrictMode>,
  document.getElementById("root")
);
