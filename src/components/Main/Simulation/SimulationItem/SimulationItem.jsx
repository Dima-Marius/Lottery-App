import React from 'react'
import style from './simulationitem.module.css'

function SimulationItem({userNumbers, randomTicket, attempts, yearsTime, spent, profit, matches}) {
    
  return (
      <div className={style.div}><p className={style.p}>Your numbers: {userNumbers} | Ticket: {randomTicket} | Attempt: {attempts} | ETA Years Playing: {yearsTime} | Spent: {spent} RON | Winnings: {profit} RON</p></div>
  )
};

export default SimulationItem;


/* console.log(`Ticket: ${randomTicket} | 
Your ticket: ${userNumbers} | 
Attempt No. ${attempts} | 
ETA Years Playing -> ${Math.floor((attempts / 52))} | 
Spent : ${attempts * 7} RON |
 Winnings: ${Math.floor(getProfit(winningCombinations))} RON`) */