import React from 'react';
import GoalCard from './GoalCard';
import { Goal } from './goals';

interface Props {
  goals: Goal[];
}

const GoalsList: React.FC<Props> = ({ goals }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ color: "white" }}>
      {goals.map((goal) => (
        <GoalCard key={goal.name} goal={goal} />
      ))}
    </div>
  );
};

export default GoalsList;
