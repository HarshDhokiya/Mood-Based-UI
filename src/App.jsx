import { useState } from 'react';
import './App.css';
import MoodSelector from './components/MoodSelector';
import ThemeWrapper from './components/ThemeWrapper';
import MoodContent from './components/MoodContent';
import FaceMoodDetector from './components/FaceMoodDetector';
import MoodToggle from './components/MoodToggle';

function App() {
  const [mood, setMood] = useState("neutral");
  const [mode, setMode] = useState("manual"); // New state

  return (
    <ThemeWrapper mood={mood}>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">🎨 Mood-Based UI</h1>

        {/* Toggle manual or AI mode */}
        <MoodToggle mode={mode} setMode={setMode} />

        {/* Conditionally render based on selected mode */}
        {/* {mode === "manual" ? (
        ) : (
          )} */}

          <MoodSelector setMood={setMood} />
          <FaceMoodDetector setMood={setMood} />
        <p className="mt-4 text-lg">
          Current mood: <strong>{mood}</strong>
        </p>

        <MoodContent mood={mood} />
      </div>
    </ThemeWrapper>
  );
}

export default App;
