import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RefrshHandler from "./RefrshHandler";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <Router>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
