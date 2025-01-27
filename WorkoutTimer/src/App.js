import { useMemo, useState } from "react";
import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import Time from "./Time"
import formatTime from "./formatTime";

function App() {
  const [time, setTime] = useState(formatTime(new Date()));
  const [allowSound, setAllowSound] = useState(true);

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const workouts = useMemo(() => {
    return (
      [
        {
          name: "Full-body workout",
          numExercises: partOfDay === "AM" ? 9 : 8,
        },
        {
          name: "Arms + Legs",
          numExercises: 6,
        },
        {
          name: "Arms only",
          numExercises: 3,
        },
        {
          name: "Legs only",
          numExercises: 4,
        },
        {
          name: "Core only",
          numExercises: partOfDay === "AM" ? 5 : 4,
        },
      ]
  )
}, [partOfDay]);

  return (
    <main>
      <h1>Workout timer</h1>
      <Time time={time} setTime={setTime}/>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound}/>
      <Calculator workouts={workouts} allowSound={allowSound}/>
    </main>
  );
}

export default App;
