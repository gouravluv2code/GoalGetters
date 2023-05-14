import React, { useState } from 'react';

type Goal = {
  name: string;
  target: number;
  progress: number;
};

const GOALS: Goal[] = [
  { name: 'Weight Loss', target: 10, progress: 2 },
  { name: 'Muscle Gain', target: 5, progress: 1 },
  { name: 'Cardiovascular Health', target: 20, progress: 10 },
];

const ProgressBar = ({ progress, target }: { progress: number; target: number }) => {
  const percentage = Math.round((progress / target) * 100);

  return (
    <div className="relative pt-1" style={{ color: "white" }}>
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200">
            {percentage}%
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-blue-600">
            {progress} / {target}
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
        <div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
      </div>
    </div>
  );
};

const GoalTracker = () => {
  const [goals, setGoals] = useState(GOALS);

  const updateProgress = (index: number, progress: number) => {
    const updatedGoals = [...goals];
    updatedGoals[index].progress = progress;
    setGoals(updatedGoals);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Goal Tracker</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {goals.map((goal, index) => (
          <div key={goal.name} className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-medium">{goal.name}</h2>
            <ProgressBar progress={goal.progress} target={goal.target} />
            <div className="flex justify-end">
              <input
                type="number"
                className="border rounded px-2 py-1 text-sm w-16 mr-2"
                value={goal.progress}
                onChange={(e) => updateProgress(index, parseInt(e.target.value))}
              />
              <button className="bg-blue-500 text-white rounded px-4 py-2 font-medium" onClick={() => updateProgress(index, goal.progress + 1)}>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalTracker;