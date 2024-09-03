# Bellroy Robot Simulator

## Overview

The Bellroy Robot Simulator is an interactive web application that simulates a robot moving on a 5x5 grid. This project was developed as part of a job application for Bellroy, demonstrating skills in TypeScript, Next.js, and Tailwind CSS.

## Features

- 5x5 grid visualization of the robot's position
- Intuitive controls for moving and rotating the robot
- Keyboard support for arrow key controls
- Responsive design with mobile and desktop layouts
- Information popups explaining how to play and about the developer

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)

## Getting Started

### Prerequisites

- Node.js (version 18.11 or later)
- npm or yarn

### Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
npm install
### Running the Application

1. Start the development server:
npm run dev
2. Open your browser and visit `http://localhost:3000`

## How to Play

1. The robot starts at position (0, 0) facing North.
2. Use the arrow buttons or keyboard arrow keys to control the robot:
- Clicking an arrow in the direction the robot is facing moves it forward.
- Clicking an arrow in a different direction rotates the robot to face that direction.
3. The robot cannot move outside the 5x5 grid.
4. The current position and direction of the robot are displayed below the grid.

## Project Structure

- `src/app/page.tsx`: Main application component
- `src/components/`: React components (RobotGrid, RobotControls, RobotStatus, IntroPopup)
- `src/models/RobotModel.ts`: Robot logic and state management
- `public/`: Static assets

## Styling

The project uses Tailwind CSS for styling, with custom colors inspired by Bellroy's design aesthetic.

## Author

Quoc T. Vu

## Acknowledgments

- Bellroy for the inspiration and opportunity
- Next.js and Tailwind CSS communities for their excellent documentation and resources
