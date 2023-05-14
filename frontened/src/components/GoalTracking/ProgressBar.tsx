import React from 'react';

export const ProgressBar: React.FC<{ percent: number; bgColor: string; label: string }> = ({
  percent,
  bgColor,
  label,
}) => {
  return (
    <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden" style={{ color: "white" }}>
      <div className={`h-full ${bgColor} rounded-full`} style={{ width: `${percent}%` }}>
        <span className="text-red-500 text-sm px-2 py-1 ">{label}</span>
      </div>
    </div>
  );
};
