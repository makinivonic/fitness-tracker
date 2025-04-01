import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-orange-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Fitness Tracker</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">Log Workout</Link>
          <Link to="/history" className="text-white hover:underline">Workout History</Link>
          <Link to="/progress" className="text-white hover:underline">Workout Progress</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
