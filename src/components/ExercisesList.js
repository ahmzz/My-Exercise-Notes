import React from "react";
import ExerciseItem from "./ExerciseItem";

const ExercisesList = (props) => {
  console.log(props.exercises);

  if (props.exercises.length == 0) {
    return (
      <>
        <h3>No exercises</h3>
      </>
    );
  } else {
    return (
      <div className="exercises-list">
        {props.exercises.map((exercise) => {
          return <ExerciseItem toggleExercise={props.toggleExercise} deleteExercise={props.deleteExercise} key={exercise.id} {...exercise} />;
        })}
      </div>
    );
  }
};

export default ExercisesList;
