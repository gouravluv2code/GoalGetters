import React from 'react';
import { Goal } from './goals';

interface Props {
  goal: Goal;
}

const GoalCard: React.FC<Props> = ({ goal }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm" style={{ color: "white" }}>
      <img src={goal.image} alt={goal.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
      <h3 className="text-lg font-medium mb-2">{goal.name}</h3>
      <p className="text-gray-600">{goal.description}</p>
    </div>
  );
};

export default GoalCard;
