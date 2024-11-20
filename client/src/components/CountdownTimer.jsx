import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function calculateTimeRemaining(targetDate) {
  const now = new Date().getTime();
  const timeDiff = targetDate - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

function CountdownTimer({ eventDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining(eventDate));
  const [circleSize, setCircleSize] = useState(getCircleSize());

  const totalDays = Math.floor((eventDate - new Date()) / (1000 * 60 * 60 * 24));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(eventDate));
    }, 1000);

    const handleResize = () => {
      setCircleSize(getCircleSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [eventDate]);


  //! Function to get the size of the circle based on the screen size
  function getCircleSize() {
    const width = window.innerWidth;
    if (width > 1024) return 95; // Large screen
    if (width > 768) return 85; // Medium screen
    return 75; // Small screen
  }

  return (
    <div className="flex justify-center items-center gap-3 lg:text-xl">
      <CountdownCircleTimer
        isPlaying
        duration={totalDays * 86400}
        initialRemainingTime={
          timeLeft.days * 86400 +
          timeLeft.hours * 3600 +
          timeLeft.minutes * 60 +
          timeLeft.seconds
        }
        colors="#330A48"
        strokeWidth={4}
        size={circleSize}
      >
        {({ remainingTime }) => {
          const days = Math.floor(remainingTime / 86400);
          return <span>{`${days} Days`}</span>;
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        isPlaying
        duration={86400}
        initialRemainingTime={
          timeLeft.hours * 3600 +
          timeLeft.minutes * 60 +
          timeLeft.seconds
        }
        colors="#330A48"
        strokeWidth={4}
        size={circleSize}
      >
        {({ remainingTime }) => {
          const hours = Math.floor(remainingTime / 3600);
          return <span>{`${hours} Hours`}</span>;
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        isPlaying
        duration={3600}
        initialRemainingTime={(timeLeft.minutes * 60 + timeLeft.seconds) % 3600}
        colors="#330A48"
        strokeWidth={4}
        size={circleSize}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor((remainingTime % 3600) / 60);
          return <span>{`${minutes} Min`}</span>;
        }}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        isPlaying
        duration={60}
        initialRemainingTime={timeLeft.seconds}
        colors="#330A48"
        strokeWidth={4}
        size={circleSize}
        key={timeLeft.seconds}
      >
        {({ remainingTime }) => <span>{`${remainingTime} Sec`}</span>}
      </CountdownCircleTimer>
    </div>
  );
}

export default CountdownTimer;
