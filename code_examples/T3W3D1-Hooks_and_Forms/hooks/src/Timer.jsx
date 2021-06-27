import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Timer({ minInput, secInput }) {
  console.log(secInput);
  const [time, setTime] = useState({
    min: parseInt(minInput, 10),
    seconds: parseInt(secInput, 10),
  });
  useEffect(() => {
    const timeInterval = setInterval(() => {
      console.log(time.seconds);
      if (time.seconds === 0 && time.min !== 0) {
        setTime({ min: time.min - 1, seconds: 59 });
      } else if (time.seconds > 0) {
        setTime({ min: time.min, seconds: time.seconds - 1 });
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <h3>
      {time.min.toString().padStart(2, '0')}
      :
      {time.seconds.toString().padStart(2, '0')}
    </h3>
  );
}

Timer.propTypes = {
  minInput: PropTypes.number,
  secInput: PropTypes.number,
};

Timer.defaultProps = {
  minInput: 15,
  secInput: 0,
};
