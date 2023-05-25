import React from 'react';
import { Link } from 'react-router-dom';
import hiking from "../../images/hiking.jpeg";
import cycling from "../../images/cycling.jpeg";
import walking from "../../images/walking.jpg";
import running from "../../images/running.jpeg";
import swimming from "../../images/swimming.jpeg";
import "./dashboard.css"
export const Dashboard = () => {
  const exerciseData = [
    {
      id: 1,
      name: 'Hiking',
      date: 'May 1, 2023',
      image: hiking,
    },
    {
      id: 2,
      name: 'Cycling',
      date: 'May 2, 2023',
      image: cycling,
    },
    {
      id: 3,
      name: 'Walking',
      date: 'May 3, 2023',
      image: walking,
    },
    {
      id: 4,
      name: 'Running',
      date: 'May 4, 2023',
      image: running,
    },
    {
      id: 5,
      name: 'Swimming',
      date: 'May 5, 2023',
      image: swimming,
    },
  ];

  return (
    <div className="dashboard">
      <h1>Exercise Tracker Dashboard</h1>
      <div className="exercise-grid">
        {exerciseData.map((exercise) => (
          <div className="exercise-card" key={exercise.id}>
            <img src={exercise.image} alt={exercise.name} />
            <div className="exercise-details">
              <h2>{exercise.name}</h2>
              <p>Date started: {exercise.date}</p>
              <Link to={`/details/${exercise.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


