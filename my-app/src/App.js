import logo from "./logo.svg";
import "./App.css";
import { post } from "./Api";
import { useEffect, useState } from "react";

function App() {
  const [apiData, setApiData] = useState("");
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, exercise, reps, sets });
    post("save-workout", { date, exercise, reps, sets })
      .then((response) => {
        console.log(response);
        // setApiData(JSON.stringify(response));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <div>
        <h1>Workout Organizer</h1>
        <form onSubmit={handleSubmit}>
          <label>Date </label>
          <input
            type="text"
            name="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label>Exercise </label>
          <input
            type="text"
            name="exercise"
            required
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
          <br />
          <label>Reps </label>
          <input
            type="text"
            name="reps"
            required
            value={reps}
            onChange={(e) => setReps(e.target.value)}
          />
          <br />
          <label>Sets </label>
          <input
            type="text"
            name="sets"
            required
            value={sets}
            onChange={(e) => setSets(e.target.value)}
          />
          <br />
          <input type="Button" value="Submit" onClick={handleSubmit} />
        </form>
        <p>{date}</p>
        <p>{exercise}</p>
        <p>{reps}</p>
        <p>{sets}</p>
      </div>
      <div>
        workout plan
        <button>Save</button>
      </div>
      <div></div>
    </div>
  );
}

export default App;
