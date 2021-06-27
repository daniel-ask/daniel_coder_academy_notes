import React, { useState } from 'react';
import Timer from './Timer';
import './App.css';

function App() {
  const [running, setRunning] = useState(false);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(0);

  const stopTimer = () => {
    setRunning(!running);
  };

  const startTimer = (e) => {
    e.preventDefault();
    setRunning(true);
  };

  const changeMin = (event) => {
    setMin(parseInt(event.target.value, 10));
    // console.log(typeof min);
  };

  const changeSec = (event) => {
    setSec(parseInt(event.target.value, 10));
  };

  return (
    <div className="App">
      <h3>
        {running ? (
          <Timer minInput={min} secInput={sec} />
        ) : (
          <form onSubmit={startTimer}>
            <input type="number" value={min} onChange={(e) => changeMin(e)} step={1} min={0} className="time" />
            <input type="number" name="seconds" id="second-input" value={sec} onChange={(e) => changeSec(e)} step={1} min={0} className="time" />
            <input type="submit" value="Start" />
          </form>
        )}
      </h3>
      {/* eslint-disable-next-line */}
      <div role="button" tabIndex={0} onKeyPress={() => alert('ok')} onClick={stopTimer}>STOP</div>
    </div>
  );
}

export default App;
