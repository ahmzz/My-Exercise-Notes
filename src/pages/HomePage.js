import React, { useState, useEffect } from "react";
import ExercisesList from "../components/ExercisesList";
import BaseFilter from "../components/BaseFilter";

const HomePage = () => {
  const [exercises, setExercise] = useState([]);
  const [currentFilter,setCurrentFilter]=useState('all')

  const updateFilter=(newFilter)=>{

    setCurrentFilter(newFilter)

  }

  useEffect(() => {
    async function fetchExercises() {
      try {
        const reply = await fetch("http://localhost:3111/exercises");
        const data = await reply.json();
        console.log("Exercises: ", data);
        setExercise(data);
      } catch (error) {}
    }

    fetchExercises();
  }, []);

  const deleteHandler=(id)=>{
    const newList=exercises.filter(exercise=> exercise.id!=id)
    setExercise(newList)
  }
  
  const toggleHandler=(id)=>{

    const copyExercises=[...exercises]
    const index=copyExercises.findIndex(exercise=>exercise.id==id)
    const clickedExercise=copyExercises[index]
    clickedExercise.complete=!clickedExercise.complete
    setExercise(copyExercises)

  }

  let jsx=(
    <ExercisesList toggleExercise={toggleHandler}  deleteExercise={deleteHandler} exercises={exercises}/>

  )

  if(currentFilter=='completed'){
    jsx=(
      <ExercisesList toggleExercise={toggleHandler}  deleteExercise={deleteHandler} exercises={exercises.filter(exercise=>exercise.complete)}/>
    )
  }

  else if(currentFilter=='pending'){
    jsx=(
      <ExercisesList toggleExercise={toggleHandler}  deleteExercise={deleteHandler} exercises={exercises.filter(exercise=>!exercise.complete)}/>
    )
  }

  return <div>
      <BaseFilter onUpdate={updateFilter} current={currentFilter}/>
      {jsx}
  </div>;
};

export default HomePage;
