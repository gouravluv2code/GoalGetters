import { useState } from 'react';
import { GoalData, GoalForm } from './GoalForm';
import { ProgressBar } from './ProgressBar';

export const GoalTracking: React.FC = () => {
  const [goals, setGoals] = useState<GoalData[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddGoal = (goal: GoalData) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
    setShowForm(false);
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="flex flex-col items-center p-4" style={{ color: "white" }}>
      <h1 className="text-3xl font-semibold mb-4">Goal Tracking</h1>
      <div className="w-full flex flex-col items-center">
  {goals.map((goal) => (
    <div key={goal.id} className="w-1/2 mb-4 bg-white rounded-md shadow-md p-4"   style={{ color: "black" }}>
      <div className="flex justify-between mb-2">
        <h2 className="text-xl font-semibold">{goal.title}</h2>
        <button
          className="text-red-500 font-semibold hover:text-red-600"
          onClick={() => handleDeleteGoal(goal.id)}
        >
          Delete
        </button>
      </div>
            <ProgressBar
              percent={(goal.progress / goal.target) * 100}
              bgColor="bg-green-400"
              label={`${goal.progress}/${goal.target} ${goal.units}`}
            />
      {/* <div className="w-full h-4 bg-gray-200 rounded-md">
        <div
          className="h-full bg-green-400 rounded-md"
          style={{ width: `${(goal.progress / goal.target) * 100}%` }}
        >
          <span className="text-white text-xs px-2">{`${goal.progress}/${goal.target} ${goal.units}`}</span>
        </div>
      </div> */}
    </div>
  ))}
  {!showForm && (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4"
      onClick={() => setShowForm(true)}
    >
      Add Goal
    </button>
  )}
  {showForm && <GoalForm onSubmit={handleAddGoal} onCancel={() => setShowForm(false)} />}
</div>
    </div>
  );
};
