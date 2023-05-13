import React from 'react'
import GoalTracker from '../components/GoalsTracker';
import GoalsPage from '../components/GoalsPage';
import ProgressAnalytics from '../components/Progress';
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
const progressData: ProgressData[] = [
  {
    date: '2023-05-01',
    workoutType: 'running',
    duration: 30,
    caloriesBurned: 350,
    nutritionalIntake: {
      protein: 20,
      carbohydrates: 40,
      fat: 10
    }
  },
];
const Home = () => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">   
      <GoalsPage/>
      <GoalTracker/>

      <ProgressAnalytics progressData={progressData}/>
      <br />
      <br />
    </section>
  );
};

export default Home;
