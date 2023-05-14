import React from 'react'
import GoalTracker from '../components/GoalTracker/GoalsTracker';
import GoalsPage from '../components/GoalsPage/GoalsPage';
import ProgressAnalytics from '../components/Progress/Progress';
import { GoalTracking } from '../components/GoalTracking/GoalTracking';
import WorkoutRoutines, { workouts } from '../components/Workout/Workout';
import NutritionalGuidance from '../components/Nutritional/Nutritional';
import Community from '../components/community/Community';
// import CarouselSlider from '../components/CarouselSlider/Carousel';


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
    <>
      <section id="home"  className="gap-16 bg-gray-900 py-10 mt-16 md:h-full md:pb-0" >
        {/* <CarouselSlider/> */}
        <GoalTracking />
        <GoalsPage />
        {/* <GoalTracker /> */}
        <ProgressAnalytics progressData={progressData} />
        <br />
        <br />
        <WorkoutRoutines workouts={workouts} />
        <NutritionalGuidance />
        <Community />

    
      </section>
    </>
  );
};

export default Home;
