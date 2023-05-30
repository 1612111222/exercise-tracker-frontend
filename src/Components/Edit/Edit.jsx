import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./edit.css";

const Edit = () => {
  const navigate = useNavigate();
  const [editType, setEditType] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleEditTypeChange = (e) => {
    setEditType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform edit submission logic here
    console.log("Edit submitted:", {
      editType,
      description,
      duration,
      date,
    });

    // Reset form fields
    setEditType("");
    setDescription("");
    setDuration("");
    setDate("");

    // Redirect to details page
    navigate("/dashboard");
  };

  return (
    <div className="edit__container">
      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <h2>Edit Activity</h2>
          <div className="select__container">
            <select
              id="editType"
              value={editType}
              onChange={handleEditTypeChange}
            >
              <option value="" disabled>
                Select an activity type
              </option>
              <option value="Hiking">Hiking</option>
              <option value="Cycling">Cycling</option>
              <option value="Walking">Walking</option>
              <option value="Running">Running</option>
              <option value="Swimming">Swimming</option>
            </select>
          </div>
          <div className="description__container">
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Description"
            />
          </div>
          <div className="duration__container">
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={handleDurationChange}
              placeholder="Duration"
            />
          </div>
          <div className="date__container">
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="button__container">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
