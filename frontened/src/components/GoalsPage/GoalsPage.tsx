import React from 'react';
import GoalsList from './GoalList';
import { goals } from './goals';

const GoalsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Fitness Goals</h2>
      <GoalsList goals={goals} />
    </div>
  );
};

export default GoalsPage;
