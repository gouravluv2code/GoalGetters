import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from "recharts";
import dayjs from "dayjs";

interface ProgressData {
  date: string;
  workoutType: string;
  duration: number;
  caloriesBurned: number;
  nutritionalIntake: {
    protein: number;
    carbohydrates: number;
    fat: number;
  };
}

interface ProgressAnalyticsProps {
  progressData: ProgressData[];
}

const calculateTotalCaloriesBurned = (progressData: ProgressData[]) => {
  return progressData.reduce((total, entry) => total + entry.caloriesBurned, 0);
};

const calculateAverageDuration = (progressData: ProgressData[]) => {
  const totalDuration = progressData.reduce((total, entry) => total + entry.duration, 0);
  const numEntries = progressData.length;
  return Math.round(totalDuration / numEntries);
};

const ProgressAnalytics: React.FC<ProgressAnalyticsProps> = ({ progressData }) => {
  const formattedData = progressData.map((entry) => ({
    ...entry,
    date: dayjs(entry.date).format("MMM D"),
  }));

  const totalCaloriesBurned = calculateTotalCaloriesBurned(progressData);
  const averageDuration = calculateAverageDuration(progressData);

  return (
    <div className="w-full max-w-screen-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium text-gray-800">Progress Analytics</h2>
        <div className="text-gray-600">
          <p>Total Calories Burned: {totalCaloriesBurned}</p>
          <p>Average Workout Duration: {averageDuration} min</p>
        </div>
      </div>
      <LineChart width={800} height={400} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date">
          <Label value="Date" position="bottom" offset={0} />
        </XAxis>
        <YAxis>
          <Label angle={-90} position="insideLeft" style={{ textAnchor: "middle" }}>
            Workout Duration (min)
          </Label>
        </YAxis>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="duration" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default ProgressAnalytics;
