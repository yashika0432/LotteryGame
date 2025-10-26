import "./App.css";
import LotteryGame from "./Lottery";

function App() {
  return (
    <>
      <LotteryGame n={3} winningsum={15} />
    </>
  );
}

export default App;
