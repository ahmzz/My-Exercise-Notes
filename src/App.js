import "./App.css";
import { Route, Switch, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import EditExercise from "./pages/EditExercise";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create-exercise" element={<CreateExercise/>}/>
        <Route path="/exercises/:id/edit" element={<EditExercise/>}/>
      </Routes>
    </div>
  );
}

export default App;
