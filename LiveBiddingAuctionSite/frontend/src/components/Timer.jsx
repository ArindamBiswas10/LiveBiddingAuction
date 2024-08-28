import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimerComplete, timeLeft, setTimeLeft, remainingItems, isDelay, setIsDelay, setCurrentBid }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        isDelay && onTimerComplete();
        setIsDelay(!isDelay);
        remainingItems > 0 && setTimeLeft(duration);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);
  // Convert seconds to formatted time (HH:MM:SS)
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div >
      <h3 className='font-bold text-5xl mt-8'>{isDelay ? "Next item in " : "Time left "}{formatTime(timeLeft)}</h3>
    </div>
  );
};

export default Timer;
