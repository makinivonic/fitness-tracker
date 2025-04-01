import { useEffect, useState } from "react";

function WorkoutHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    setHistory(storedHistory);
  }, []);

  const handleDelete = (index) => {
    const updatedHistory = history.filter((_, i) => i !== index);
    localStorage.setItem("workoutHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
  };

  return (
    <div
      className="workout-history"
      style={{
        backgroundImage: "url('/workout-bg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensure it takes the full height
        padding: "20px",
        color: "white", // White text for better contrast
      }}
    >
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 bg-opacity-70">
        <h2 className="text-2xl font-bold text-center mb-4">Workout History</h2>

        {history.length === 0 ? (
          <p className="text-center text-gray-500">No workouts logged yet.</p>
        ) : (
          <ul className="space-y-2">
            {history.map((log, index) => (
              <li
                key={index}
                className="p-2 bg-orange-500 rounded flex justify-between items-center"
              >
                <span>
                  <strong>{log.date}</strong>: {log.exercise} ({log.reps} reps)
                </span>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WorkoutHistory;
