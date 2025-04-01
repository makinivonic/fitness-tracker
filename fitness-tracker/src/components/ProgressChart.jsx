import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function ProgressChart() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("workoutHistory")) || [];
    setHistory(storedHistory);
  }, []);

  // Count workouts per day
  const workoutCounts = history.reduce((acc, workout) => {
    acc[workout.date] = (acc[workout.date] || 0) + 1;
    return acc;
  }, {});

  // Convert to array format for Recharts
  const chartData = Object.entries(workoutCounts).map(([date, count]) => ({
    date,
    count,
  }));

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Workout Progress</h2>
      {chartData.length === 0 ? (
        <p className="text-center text-gray-500">No workout data available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ProgressChart;
