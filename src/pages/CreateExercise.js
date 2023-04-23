import React, { useState } from "react";
import "./CreateExercise.css";
import { Link, useNavigate } from "react-router-dom";
const CreateExercise = () => {
  const [exercise, setExercise] = useState({
    title: "",
    details: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    
    setExercise({ ...exercise, [name]: value });
  };

  const submitExercise = (e) => {
    e.preventDefault();
    const newExercise = {
      title: exercise.title,
      details: exercise.details,
      complete: false,
      id: Math.floor(Math.random() * 10000),
    };

    fetch(`http://localhost:3111/exercises/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newExercise),
    })
      .then(() => {
        setExercise({
          title: "",
          details: "",
        });
        navigate('/')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create Exercise</h1>

      <form onSubmit={submitExercise}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={exercise.title}
          onChange={handleInput}
        />

        <label>Description</label>
        <textarea
          cols="30"
          rows="10"
          type="text"
          name="details"
          value={exercise.details}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateExercise;
