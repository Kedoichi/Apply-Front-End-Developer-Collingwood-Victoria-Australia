import React from "react";

interface RobotGridProps {
  grid: number[][];
  robotDirection: string;
}

const RobotGrid: React.FC<RobotGridProps> = ({ grid, robotDirection }) => {
  const getDirectionArrow = (direction: string) => {
    switch (direction) {
      case "N":
        return "↑";
      case "E":
        return "→";
      case "S":
        return "↓";
      case "W":
        return "←";
      default:
        return "•";
    }
  };

  return (
    <div className="w-[250px] h-[250px] border border-gray-300 mb-6 mx-auto">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row">
          {row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-[50px] h-[50px] border border-gray-300 flex items-center justify-center text-2xl"
            >
              {cell === 1 ? (
                <span className="text-bellroy-tan font-bold">
                  {getDirectionArrow(robotDirection)}
                </span>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RobotGrid;