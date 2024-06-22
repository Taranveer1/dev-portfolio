import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";

import Index from "./Components/index";
import Resume from "./Pages/Resume/Resume";
import Manage from "./Pages/Manage/Manage";

function App() {
  return (
    <Router className="container mx-auto">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
