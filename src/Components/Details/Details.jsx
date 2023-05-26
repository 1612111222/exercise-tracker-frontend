import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './details.css';

const Details = () => {
  const { id } = useParams();
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    // Fetch activity data based on the provided ID from the backend
    const fetchActivityData = async () => {
      try {
        // Replace this with your actual API call or data fetching logic
        const response = await fetch(`/api/activities/${id}`);
        const data = await response.json();
        setActivityData(data);
      } catch (error) {
        console.error('Error fetching activity data:', error);
      }
    };

    fetchActivityData();
  }, [id]);

  if (!activityData) {
    return <div>Loading activity data...</div>;
  }

  const handleDelete = async () => {
    try {
      // Replace this with your actual API call or delete logic
      await fetch(`/api/activities/${id}`, {
        method: 'DELETE',
      });
      // Redirect to the dashboard after deletion
      // Replace '/dashboard' with your actual route
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };

  return (
    <div className="details">
      <h2>Activity Details</h2>
      <div className="card">
        <img src={activityData.image} alt={activityData.name} />
        <div className="card-details">
          <h3>{activityData.name}</h3>
          <p>{activityData.description}</p>
          <p>Duration: {activityData.duration} hours</p>
          <p>Date: {activityData.date}</p>
          <div className="actions">
            <Link to={`/edit/${id}`} className="edit-icon">
              <EditIcon />
            </Link>
            <button onClick={handleDelete} className="delete-icon">
              <Link>
              <DeleteIcon />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
