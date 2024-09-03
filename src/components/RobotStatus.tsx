import React from "react";

interface RobotStatusProps {
    position: { x: number; y: number };
    direction: string;
}

const RobotStatus: React.FC<RobotStatusProps> = ({ position, direction }) => {
    const directionArrow = {
        N: "↑",
        E: "→",
        S: "↓",
        W: "←",
    }[direction];

    return (
        <div className="text-center font-bold text-bellroy-blue mt-4">
            <div>
                Position: ({position.x}, {position.y})
            </div>
            <div>
                Direction: {direction} {directionArrow}
            </div>
        </div>
    );
};

export default RobotStatus;