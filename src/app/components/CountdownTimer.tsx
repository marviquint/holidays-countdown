"use client";

import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  label: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, label }) => {
  const currentYear = new Date().getFullYear();

  // Determine if the current year's event has passed
  const initialTargetDate =
    new Date(targetDate).getTime() < new Date().getTime()
      ? label === "Christmas"
        ? `${currentYear + 1}-12-25T00:00:00`
        : `${currentYear + 1}-01-01T00:00:00`
      : targetDate;

  const initialLabel =
    new Date(targetDate).getTime() < new Date().getTime()
      ? `${label} ${currentYear + 1}`
      : `${label} ${currentYear}`;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [nextTargetDate, setNextTargetDate] = useState(initialTargetDate);
  const [eventLabel, setEventLabel] = useState(initialLabel);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const target = new Date(nextTargetDate);
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Timer expired, move to the next year's event
        const nextYear = new Date().getFullYear() + 1;
        const updatedTargetDate =
          label === "Christmas"
            ? `${nextYear}-12-25T00:00:00`
            : `${nextYear}-01-01T00:00:00`;

        setNextTargetDate(updatedTargetDate);
        setEventLabel(`${label} ${nextYear}`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [nextTargetDate, label]);

  return (
    <div
      className="timer-container mb-10"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="text-white">
        <h2 className="timer-label text-lg sm:text-2xl">{eventLabel}</h2>
        <div className="timer-values grid grid-cols-1 gap-4 sm:gap-8 md:gap-10 justify-center sm:justify-start">
          <div className="timer-section text-2xl sm:text-4xl md:text-5xl">
            <span>{timeLeft.days}</span>
            <span className="timer-unit text-sm sm:text-base">Days</span>
          </div>
          <div className="timer-section text-2xl sm:text-4xl md:text-5xl">
            <span>{timeLeft.hours}</span>
            <span className="timer-unit text-sm sm:text-base">Hours</span>
          </div>
          <div className="timer-section text-2xl sm:text-4xl md:text-5xl">
            <span>{timeLeft.minutes}</span>
            <span className="timer-unit text-sm sm:text-base">Minutes</span>
          </div>
          <div className="timer-section text-2xl sm:text-4xl md:text-5xl">
            <span>{timeLeft.seconds}</span>
            <span className="timer-unit text-sm sm:text-base">Seconds</span>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default CountdownTimer;
