import "./App.css"
import { Navbar } from "./frontend/components";
import { HomePage } from "./frontend/pages";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
