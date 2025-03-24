import { useState } from "react";

function WorkoutLog({ onLogWorkout }) {
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");

  const handleLogWorkout = () => {
    if (!exercise || !reps) return;

    const newWorkout = {
      date: new Date().toISOString().split("T")[0], // Store date as YYYY-MM-DD
      exercise,
      reps: parseInt(reps, 10),
    };

    // Save to local storage
    const storedHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    storedHistory.push(newWorkout);
    localStorage.setItem("workoutHistory", JSON.stringify(storedHistory));

    onLogWorkout(newWorkout); // Update parent state if needed

    setExercise("");
    setReps("");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Log Workout</h2>
      <input
        type="text"
        placeholder="Exercise Name"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <button
        onClick={handleLogWorkout}
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Add Workout
      </button>
    </div>
  );
}

export default WorkoutLog;
