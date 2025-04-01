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
    <div 
      className="w-full min-h-screen bg-[url('/workout-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center"
    >
      <div className="bg-white bg-opacity-90 p-6 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Log Workout</h2>
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
          className="w-full bg-orange-700 text-white py-2 rounded"
        >
          Add Workout
        </button>
      </div>
    </div>
  );
}

export default WorkoutLog;
