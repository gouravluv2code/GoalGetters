import { useState } from "react";

export type GoalData = {
  id: number;
  title: string;
  target: number;
  units: string;
  progress: number;
};

interface GoalFormProps {
  onSubmit: (goal: GoalData) => void;
  onCancel: () => void;
}

export const GoalForm: React.FC<GoalFormProps> = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState(0);
  const [units, setUnits] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newGoal: GoalData = {
      id: Math.floor(Math.random() * 1000),
      title,
      target,
      units,
      progress: 0,
    };

    onSubmit(newGoal);

    setTitle("");
    setTarget(0);
    setUnits("");
  };

  return (
    <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2" style={{ color: "white" }}>
        <label htmlFor="title" className="font-semibold">
          Title:
        </label>
        <input
          id="title"
          type="text"
          value={title}
          style={{ color: "black" }}
          onChange={(event) => setTitle(event.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="target" className="font-semibold">
          Target:
        </label>
        <input
          id="target"
          type="number"
          value={target}
          style={{ color: "black" }}
          onChange={(event) => setTarget(+event.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="units" className="font-semibold">
          Units:
        </label>
        <input
          id="units"
          type="text"
          style={{ color: "black" }}
          value={units}
          onChange={(event) => setUnits(event.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Create Goal
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-gray-300  font-semibold px-4 py-2 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
