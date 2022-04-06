import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, PlaylistModal } from "./frontend/components";
import { HomePage, VideoListing, Login, SignUp, VideoPage, Liked, WatchLater, History, Playlist, NotFound, Profile } from "./frontend/pages";
import Mockman from "mockman-js";
import { usePlaylist } from "./frontend/context/playlist-context";
import { PlayListPage } from "./frontend/pages/PlayListPage";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}
function App() {
  const { modal } = usePlaylist()
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/videos' element={<VideoListing />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/watchlater' element={<WatchLater />} />
          <Route path='/liked' element={<Liked />} />
          <Route path='/history' element={<History />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/playlist/:id' element={<PlayListPage />} />
          <Route path='/videos/:id' element={<VideoPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/mockman" element={<MockAPI />} />

        </Routes>

      </Router>
      <PlaylistModal modal={modal} />
    </>
  );
}

export default App;
