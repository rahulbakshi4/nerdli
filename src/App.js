import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar } from "./frontend/components";
import { HomePage, VideoListing, Login, SignUp, } from "./frontend/pages";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videos' element={<VideoListing />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </Router>
  );
}

export default App;
