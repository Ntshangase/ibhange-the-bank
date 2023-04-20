import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

function App() {
  return (
    // replaced switch with routes since this is v.6
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" />
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
