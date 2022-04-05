import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from "./frontend/components";
import { HomePage, VideoListing, Login, SignUp, VideoPage, Liked, WatchLater } from "./frontend/pages";
import Mockman from "mockman-js";
function MockAPI() {
  return (
    <div className="MockAPI">
      <Mockman />
    </div>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videos' element={<VideoListing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/watchlater' element={<WatchLater />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='/videos/:id' element={<VideoPage />} />
        <Route path="/mockman" element={<MockAPI />} />

      </Routes>

    </Router>
  );
}

export default App;
