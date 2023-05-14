import React, { useState } from "react";

// interface Exercise {
//   name: string;
//   description: string;
//   videoUrl: string;
// }

// interface WorkoutPlan {
//   name: string;
//   description: string;
//   exercises: Exercise[];
// }

// interface Props {
//   workoutPlans: WorkoutPlan[];
// }

// const WorkoutRoutines: React.FC<Props> = ({ workoutPlans }) => {
//   const [currentWorkoutPlanIndex, setCurrentWorkoutPlanIndex] = useState(0);
//   const currentWorkoutPlan = workoutPlans[currentWorkoutPlanIndex];

//   const handleWorkoutPlanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setCurrentWorkoutPlanIndex(Number(event.target.value));
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col sm:flex-row justify-between items-center py-8">
//         <h1 className="text-3xl font-bold">{currentWorkoutPlan.name}</h1>
//         <div className="flex items-center">
//           <span className="mr-4">Select workout plan:</span>
//           <select value={currentWorkoutPlanIndex} onChange={handleWorkoutPlanChange}>
//             {workoutPlans.map((workoutPlan, index) => (
//               <option key={workoutPlan.name} value={index}>
//                 {workoutPlan.name}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <p className="mb-8">{currentWorkoutPlan.description}</p>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {currentWorkoutPlan.exercises.map((exercise) => (
//           <div key={exercise.name} className="border rounded-lg overflow-hidden shadow-md">
//             <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
//               <iframe
//                 src={exercise.videoUrl}
//                 className="absolute top-0 left-0 w-full h-full"
//                 frameBorder="0"
//                 allowFullScreen
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-medium mb-2">{exercise.name}</h2>
//               <p className="text-gray-600">{exercise.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

type Workout = {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: number;
  imageUrl: string;
};

type Props = {
  workouts: Workout[];
};

const WorkoutRoutines: React.FC<Props> = ({ workouts }) => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8" style={{ color: "white" }}>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Workout Routines
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap justify-center">
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="max-w-xs mx-auto bg-white rounded-md shadow-md overflow-hidden m-4"
          >
            <img
              className="h-48 w-full object-cover"
              src={workout.imageUrl}
              alt={workout.title}
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{workout.title}</h3>
              <p className="text-gray-700 mb-2">{workout.description}</p>
              <p className="text-gray-700 mb-2">
                Level: {workout.level}, Duration: {workout.duration} mins
              </p>
              <button className="bg-gray-800 text-white py-2 px-4 rounded-full">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutRoutines;


// const workoutPlans: WorkoutPlan[] = [
//     {
//       name: "Full-Body Workout",
//       description: "This workout plan targets all major muscle groups for a total body workout.",
//       exercises: [
//         {
//           name: "Squats",
//           description: "Stand with your feet shoulder-width apart, then squat down by bending your knees and pushing your hips back. Keep your chest up and your weight on your heels. Rise back up to the starting position.",
//           videoUrl: "https://www.youtube.com/embed/aclHkVaku9U",
//         },
//         {
//           name: "Push-Ups",
//           description: "Start in a plank position with your hands slightly wider than shoulder-width apart. Lower your body until your chest nearly touches the floor, then push yourself back up to the starting position.",
//           videoUrl: "https://www.youtube.com/embed/IODxDxX7oi4",
//         },
//     ]
//     }
// ]

export const workouts: Workout[] = [
    {
      id: 1,
      title: 'Full Body HIIT',
      description: 'A high-intensity full body workout that targets every muscle group',
      level: 'Advanced',
      duration: 45,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgfXReK0sUkodMNc6vMzDi8ID5MpdJURkVlA&usqp=CAU',
    },
    {
      id: 2,
      title: 'Yoga for Beginners',
      description: 'A gentle yoga routine designed for those new to the practice',
      level: 'Beginner',
      duration: 30,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaIeUZ0hoG4BMoOW17hakVlRh3Qi-FzVeFw&usqp=CAU',
    },
    {
      id: 3,
      title: 'Leg Day',
      description: 'A lower body workout that focuses on building strength and endurance in the legs',
      level: 'Intermediate',
      duration: 60,
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/healthy-lifestyle-exercising-and-people-concepts-royalty-free-image-1647617548.jpg',
    },
    {
      id: 4,
      title: 'Upper Body Sculpt',
      description: 'A strength training workout that targets the upper body muscles',
      level: 'Intermediate',
      duration: 45,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp245NrfUzzqQ75aXKQI_LZcxyojwjD19opA&usqp=CAU',
    },
    {
      id: 5,
      title: 'Cardio Blast',
      description: 'A high-intensity cardio workout designed to improve cardiovascular endurance',
      level: 'Advanced',
      duration: 30,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgaY6g7oMg-F65Uc2Tg2sYsv2RXCiN2UT3w&usqp=CAU',
    },
  ];