import React, { useEffect } from "react";

interface RobotControlsProps {
    onMove: () => void;
    onChangeDirection: (newDirection: string) => void;
    robotDirection: string;
}

const RobotControls: React.FC<RobotControlsProps> = ({
    onMove,
    onChangeDirection,
    robotDirection,
}) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowUp":
                    handleArrowClick("N");
                    break;
                case "ArrowDown":
                    handleArrowClick("S");
                    break;
                case "ArrowLeft":
                    handleArrowClick("W");
                    break;
                case "ArrowRight":
                    handleArrowClick("E");
                    break;
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [robotDirection, onMove, onChangeDirection]);

    const handleArrowClick = (direction: string) => {
        if (direction === robotDirection) {
            onMove();
        } else {
            onChangeDirection(direction);
        }
    };

    return (
        <div className="mt-4">
            <div className="grid grid-cols-3 gap-2 max-w-[150px] mx-auto">
                <div></div>
                <button
                    onClick={() => handleArrowClick("N")}
                    className="btn-primary text-white p-4 rounded"
                >
                    ↑
                </button>
                <div></div>
                <button
                    onClick={() => handleArrowClick("W")}
                    className="btn-primary  text-white p-4 rounded"
                >
                    ←
                </button>
                <div className="bg-gray-300 rounded"></div>
                <button
                    onClick={() => handleArrowClick("E")}
                    className="btn-primary text-white p-4 rounded"
                >
                    →
                </button>
                <div></div>
                <button
                    onClick={() => handleArrowClick("S")}
                    className="btn-primary text-white p-4 rounded"
                >
                    ↓
                </button>
                <div></div>
            </div>
            <p className="text-center mt-4 text-sm text-gray-600">
                You can also control the robot with your arrow keys
            </p>
        </div>
    );
};

export default RobotControls;
