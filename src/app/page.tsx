"use client";

import React, { useState, useEffect } from "react";
import RobotModel from "@/models/RobotModel";
import RobotGrid from "@/components/RobotGrid";
import RobotControls from "@/components/RobotControls";
import RobotStatus from "@/components/RobotStatus";
import IntroPopup from "@/components/IntroPopup";

export default function Home() {
    const [robot, setRobot] = useState<RobotModel | null>(null);

    useEffect(() => {
        setRobot(new RobotModel());
    }, []);

    const handleMove = () => {
        if (robot) {
            const newRobot = new RobotModel(robot);
            newRobot.moveForward();
            setRobot(newRobot);
        }
    };

    const handleChangeDirection = (newDirection: string) => {
        if (robot) {
            const newRobot = new RobotModel(robot);
            newRobot.setDirection(newDirection);
            setRobot(newRobot);
        }
    };

    if (!robot) return null;

    return (
        <div className="min-h-screen bg-bellroy-offwhite flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-bellroy-blue mb-4 text-center">
                    Bellroy Robot Simulator
                </h1>
                <RobotGrid grid={robot.grid} robotDirection={robot.direction} />
                <RobotControls
                    onMove={handleMove}
                    onChangeDirection={handleChangeDirection}
                    robotDirection={robot.direction}
                />
                <RobotStatus
                    position={robot.position}
                    direction={robot.direction}
                />
            </div>
            <IntroPopup />
        </div>
    );
}
