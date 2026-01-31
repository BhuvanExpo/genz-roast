import { useState } from "react";
import "./App.css";
import clickSound from "./click.mp3";

export default function App() {
  const [page, setPage] = useState(1);
  const [toast, setToast] = useState("");
  const [result, setResult] = useState(null);

  const play = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const showToast = (text) => {
    setToast(text);
    setTimeout(() => setToast(""), 2500);
  };

  const analyze = () => {
    play();
    showToast("Consulting last two brain cells 🧠🧠");
    setTimeout(() => {
      const results = [
        ["✨ Main Character", "Delusional confidence but it’s working."],
        ["🧃 Soft Launch Era", "Potential detected. Needs caffeine."],
        ["😈 Chaotic Neutral", "Violence… but politely."],
        ["💀 Chronically Online", "Go touch grass. Respectfully."],
        ["🧠 Low-Key Genius", "Overthinks everything. Still slays."]
      ];
      setResult(results[Math.floor(Math.random() * results.length)]);
      setPage(3);
    }, 2000);
  };

  return (
    <div className="container">
      {page === 1 && (
        <div className="card">
          <h1>🧠 Internet Personality Test</h1>
          <p>This AI knows you better than your screen time.</p>
          <button className="primary" onClick={() => { play(); setPage(2); }}>
            Start Test
          </button>
          <button className="secondary" onClick={() => showToast("Lying already 😐")}>
            I’m normal
          </button>
        </div>
      )}

      {page === 2 && (
        <div className="card">
          <h1>🤖 AI Analyzing…</h1>
          <p>Judging silently…</p>
          <button className="primary" onClick={analyze}>
            Analyze Me
          </button>
        </div>
      )}

      {page === 3 && (
        <div className="card">
          <h1>{result[0]}</h1>
          <p>{result[1]}</p>
          <button className="primary" onClick={() => { play(); setPage(1); }}>
            Retake (validation needed)
          </button>
        </div>
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}
