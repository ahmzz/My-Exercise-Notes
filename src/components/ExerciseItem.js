import React from "react";
import "./ExerciseItem.css";
import { Link } from "react-router-dom";

const ExerciseItem = ({
  id,
  title,
  details,
  complete,
  deleteExercise,
  toggleExercise,
}) => {
  const deleteExerciseHandler = () => {
    fetch(`http://localhost:3111/exercises/${id}`, {
      method: "DELETE",
    })
      .then(() => deleteExercise(id))
      .catch((err) => console.log(err));
  };

  const toggleExerciseHandler = () => {
    fetch(`http://localhost:3111/exercises/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ complete: !complete }),
    })
      .then(() => toggleExercise(id))
      .catch((err) => console.log(err));
  };

  return (
    <div className={complete ? "exercise complete" : "exercise"}>
      <div className="actions">
        <h4>{title}</h4>
        <div className="buttons">
          
          <button onClick={deleteExerciseHandler}>Delete</button>
          <Link to={`/exercises/${id}/edit`}>Edit</Link>
          <button onClick={toggleExerciseHandler}>Toggle</button>
        </div>
      </div>
      <div className="details">{details}</div>
    </div>
  );
};

export default ExerciseItem;
