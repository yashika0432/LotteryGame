import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./ticket";

export default function LotteryGame({ n = 3, winningsum = 15 }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningsum;
  let buyticket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
      <Ticket ticket={ticket} />
      <br></br>
      <button onClick={buyticket}>Buy new Ticket</button>
      <h3>{isWinning && "Congratulations, you won"}</h3>
    </div>
  );
}
