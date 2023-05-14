import React, { useState } from "react";

type Meal = {
  id: number;
  name: string;
  imageUrl: string;
  calories: number;
};

type NutritionalGuidanceProps = {
  meals: Meal[];
};

  
const meals: Meal[] = [
    {
      id: 1,
      name: "Grilled Chicken Salad",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAodq5hzgt_I1MOsT6AbdTLKnqRq5FhVX7Dw&usqp=CAU",
      calories: 300,
    },
    {
      id: 2,
      name: "Vegetable Stir-Fry",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdydFa5ih7abmQun15DGRvmIBy5jSLbkmmg&usqp=CAU",
      calories: 250,
    },
    {
      id: 3,
      name: "Salmon with Roasted Vegetables",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg3zKEkPgiVTwShFVFtK_JzFEKL-eNqOiE8Q&usqp=CAU",
      calories: 400,
    },
    {
      id: 4,
      name: "Quinoa salad with avocado and tomatoes",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27MDb4XeFGNtWalU4O06xGDyxj1ZLatekkQ&usqp=CAU",
      calories: 350,
    },
    {
      id: 5,
      name: "Beef and broccoli stir-fry",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9-B2inkCMeXcUWM9lnPfteSsPWpimcoE2A&usqp=CAU",
      calories: 600,
    }
    // Add more meals here
  ];

const NutritionalGuidance= () => {
  const [selectedMeals, setSelectedMeals] = useState<Meal[]>([]);

  const handleMealSelection = (meal: Meal) => {
    setSelectedMeals([...selectedMeals, meal]);
  };

  const handleMealDeselection = (meal: Meal) => {
    setSelectedMeals(selectedMeals.filter((m) => m.id !== meal.id));
  };

  const totalCalories = selectedMeals.reduce(
    (acc, curr) => acc + curr.calories,
    0
  );

  return (
    <div className="flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-4">Nutritional Guidance</h2>
    <div >
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <h3 className="text-lg font-bold mb-4 md:mb-0">Select Meals</h3>
        <p className="text-sm">
          Total Calories: <span className="font-bold">{totalCalories}</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className={`flex flex-col justify-between items-center p-4 rounded-md border ${
              selectedMeals.some((m) => m.id === meal.id)
                ? "border-green-500"
                : "border-gray-300"
            }`}
          >
            <img src={meal.imageUrl} alt={meal.name} className="w-32 h-32 object-cover mb-2" />
            <h4 className="text-lg font-bold">{meal.name}</h4>
            <p className="text-sm">{meal.calories} Calories</p>
            {selectedMeals.some((m) => m.id === meal.id) ? (
              <button className="bg-red-500 text-white px-2 py-1 rounded-md mt-2" onClick={() => handleMealDeselection(meal)}>
                Remove
              </button>
            ) : (
              <button className="bg-green-500 text-white px-2 py-1 rounded-md mt-2" onClick={() => handleMealSelection(meal)}>
                Select
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default NutritionalGuidance;


// className="w-full max-w-2xl"
