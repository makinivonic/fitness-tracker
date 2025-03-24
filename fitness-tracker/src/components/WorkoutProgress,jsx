import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function WorkoutProgress() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    setHistory(storedHistory);
  }, []);

  // Group exercises by name
  const groupedExercises = {};
  history.forEach((log) => {
    if (!groupedExercises[log.exercise]) {
      groupedExercises[log.exercise] = {};
    }
    groupedExercises[log.exercise][log.date] = (groupedExercises[log.exercise][log.date] || 0) + log.reps;
  });

  // Get all dates of the current month
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dateLabels = Array.from({ length: daysInMonth }, (_, i) => `${year}-${String(month + 1).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`);

  // Prepare data for each exercise
  const datasets = Object.keys(groupedExercises).map((exercise, index) => ({
    label: exercise,
    data: dateLabels.map((date) => groupedExercises[exercise][date] || 0),
    backgroundColor: `rgba(${(index * 50) % 255}, ${(index * 100) % 255}, 200, 0.6)`,
    borderWidth: 1,
  }));

  const data = {
    labels: dateLabels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Workout Progress" },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Reps" }, beginAtZero: true },
    },
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Workout Progress</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default WorkoutProgress;
