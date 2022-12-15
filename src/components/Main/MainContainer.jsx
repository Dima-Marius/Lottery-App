import React, { useState, useEffect } from 'react';
import Settings from '../Settings/Settings';
import Simulation from './Simulation/Simulation';
import Stats from './Stats/Stats';

const MainContainer = (props) => {
    const main_tickets = [
        /* {
            userNumbers:1,
            randomTicket:1,
            attempts:1,
            yearsTime:1,
            spent:2,
            profit:3,
            matches:4,
           },
           {
            userNumbers:1,
            randomTicket:1,
            attempts:1,
            yearsTime:1,
            spent:2,
            profit:3,
            matches:4,
           }, */
    ];
    const [userTickets, setUserTicket] = useState([]);
    const [ticketNumbers, setTicketNumbers] = useState(0)
    const [spentCash, setSpentCash] = useState(0)
    const [gainedCash, setGainedCash] = useState(0)
    const [combinations, setCombinations] = useState()
    const [pickedNumbers, setPickedNumbers] = useState([37,25,9,26,40,3])
        // start skid skills


const getRandomTicket = ( length, maxNum ) => {
    const randomTicket = [];
    while (randomTicket.length < length) {
        let min = Math.ceil(1);
        let max = Math.floor(maxNum);
        let num = Math.floor(Math.random() * (max - min + 1) + min)
        if (!randomTicket.includes(num)) {
        randomTicket.push(num)
         num = null;
    }
  } return (randomTicket);
} 

const ascending = (a,b) => {
    return a-b;
}

const getProfit = (arr) => {
    const three = arr[0] * 30
    const four = arr[1] * 337
    const five = arr[2] * 9073
    const six = arr[3] * 353850
    const nums = [three,four,five,six];
    const result = nums.reduce((acc,num) => acc+num);
    return result
}

const tickets = ticketNumbers;
const time = [tickets,0,0] // weeks
const userNumbers = pickedNumbers;
let profit = 0;
let ticketMatches = 0;
let attempts = null;
const winningCombinations = [0,0,0,0] // 3 4 5 6


for (let i = 0; i < tickets ; i++) {
      attempts += 1;
      let randomTicket = getRandomTicket(6,49);
      
      for ( let j = 0; j <= randomTicket.length; j++) {
          if (randomTicket.includes(userNumbers[j])) {
              ticketMatches += 1;
          }
        }
    if (ticketMatches === 3) {
        winningCombinations[0] += 1
    } if (ticketMatches === 4) {
        winningCombinations[1] += 1
    } if (ticketMatches === 5) {
        winningCombinations[2] += 1
    } if (ticketMatches === 6) {
        winningCombinations[3] += 1
    }
    

    var data = {
      userNumbers: userNumbers.toString().replaceAll(',', ' '),
      randomTicket: randomTicket.toString().replaceAll(',', ' '),
      attempts: attempts,
      yearsTime: Math.floor((attempts / 52)),
      spent: attempts * 7,
      profit: Math.floor(getProfit(winningCombinations)),
      matches: winningCombinations,
    }
    
    main_tickets.unshift(data);


    
  
    // console.log(`Ticket: ${randomTicket} | Your ticket: ${userNumbers} | Attempt No. ${attempts} | ETA Years Playing -> ${Math.floor((attempts / 52))} | Spent : ${attempts * 7} RON | Winnings: ${Math.floor(getProfit(winningCombinations))} RON`);
    randomTicket = null;
    ticketMatches = null;
  }




//////////////////////////////////////////////// END

const clearHandler = () => {
    setUserTicket([]);
}

const onTicketNumbers = (data) => {
    setTicketNumbers(data);

}



const passProfit = () => {
    props.onGetProfit(gainedCash)
 }

 const onPickNumbers = (data) => {
    setPickedNumbers(data.split(' ').map(num => parseInt(num)))
 }

 const onSelectCurrency = (data) => {
    props.passCurency(data);
 }


useEffect(() => {
    passProfit();
    setUserTicket(main_tickets);
    setSpentCash(ticketNumbers * 7)
    //(main_tickets.length > 1 ? main_tickets.reduce((acc,obj) => acc + obj.spent,0) : 0)
    const lastObj = main_tickets[10] // get profit, No idea how it works, dont touch
    setGainedCash(lastObj ? lastObj.profit : 0)
    setCombinations(winningCombinations)
    console.log(winningCombinations)
},[ticketNumbers]);

    return (
        <div>
            <input value={gainedCash} onChange={passProfit} type='hidden'></input>
            <Settings onSelectCurrency={onSelectCurrency} onPickNumbers={onPickNumbers} clearHandler={clearHandler} onTicketNumbers={onTicketNumbers} />
            <Stats ticketNumbers={ticketNumbers} combinations={combinations} spentCash={spentCash}/>
            <Simulation ticketNumbers={ticketNumbers} userTickets={userTickets} {...userTickets} />
            
        </div>
    )
};

export default MainContainer;