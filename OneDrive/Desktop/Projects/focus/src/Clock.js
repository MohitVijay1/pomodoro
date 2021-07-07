import React, { useState, useEffect } from "react";
import './Clock.css'
import { Link} from "react-router-dom";
export default function Pomodoro() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      
      
      <div className="container">
      <label for="TextInput" class="form-label"> Study Session</label>
                    <input type="text" id="TextInput" class="form-control" placeholder=" Session Time"
      onChange={
        e=>{setMinutes(e.target.value)}
      } />
        
        <div className="timer">
        <div className="message">
            {displayMessage && <div>Break time! New session starts in
              You can do the follwing thing if you feeling tired:
              <ul>
                <li>Take a short walk</li>
                <li>Do breathing exercises</li>
                <li>Make yourself a drink</li>
                <li>Meditate</li>
              
              </ul> </div>}
      </div>
        {timerMinutes}:{timerSeconds}
      </div>
      </div>
      <div className="dd">
     
      </div>
    </div>
  );
}