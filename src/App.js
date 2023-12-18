import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ClassroomsPage from "./components/classroomsPage";
import ExamsPage from "./components/examsPage";
import Allocation from "./components/Allocation";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/classrooms" element={<ClassroomsPage />} />
          <Route path="/exams" element={<ExamsPage />} />
          <Route path="/allocation" element={<Allocation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
