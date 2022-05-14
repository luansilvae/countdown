import CountdownTimer from "./components/CountdownTimer"

function App() {
  const date = new Date('May 25, 2022 12:00').getTime();

  return (
    <div className="countdown">
      <CountdownTimer targetDate={date} />
    </div>
  ) 
}

export default App
