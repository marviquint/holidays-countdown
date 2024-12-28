import CountdownTimer from "./components/CountdownTimer";

export default function Home() {
  const currentYear = new Date().getFullYear();

  // Christmas target date
  const christmasTargetDate = `${currentYear}-12-25T00:00:00`;

  // New Year target date
  const newYearTargetDate = `${currentYear}-01-01T00:00:00`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-10 sm:text-6xl lg:text-7xl">Countdown to Holidays</h1>
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
        <CountdownTimer targetDate={christmasTargetDate} label="Christmas" />
        <CountdownTimer targetDate={newYearTargetDate} label="New Year" />
      </div>
    </main>
  );
}
