import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkoutLog from "./components/WorkoutLog";
import WorkoutHistory from "./components/WorkoutHistory";
import WorkoutProgress from "./components/WorkoutProgress";

function App() {
  return (
    <Router>
      <div className="min-h-screen"> {/* Remove bg-orange */}
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<WorkoutLog />} />
            <Route path="/history" element={<WorkoutHistory />} />
            <Route path="/progress" element={<WorkoutProgress />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
