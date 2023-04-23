import React, { useEffect, useState } from "react";
import "./CreateExercise.css";
import { Link, useNavigate,useParams } from "react-router-dom";
const EditExercise = () => {
  const [exercise, setExercise] = useState({
    title: "",
    details: "",
  });

  const navigate = useNavigate();
  const params=useParams();
  const routeId=params.id
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    
    setExercise({ ...exercise, [name]: value });
  };

  useEffect(()=>{

    fetch(`http://localhost:3111/exercises/${routeId}`)
    .then(response=>response.json())
    .then(data=>{
        setExercise({
            title:data.title,
            details:data.details
        })
    }).catch(err=>console.log(err))

    

  },[routeId])

  const updateExercise = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3111/exercises/${routeId}`,{
        method:"PATCH",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(exercise)
    }).then(()=>navigate('/'))
    .catch((err)=>console.log(err))
   
  };

  return (
    <div>
      <h1>Edit Exercise</h1>

      <form onSubmit={updateExercise}>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditExercise;
