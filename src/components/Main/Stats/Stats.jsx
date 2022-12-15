import React from "react";
import style from './stats.module.css'

const Stats = ({spentCash,combinations,ticketNumbers}) => {

 //   const today = new Date().toJSON().slice(0,10).replace(/-/g,'/');  

    if (!spentCash) {
        return (
            <div className={`${style['stats-container']} ${'stats'}`}>
            <h2 className={style.h2}>Stats</h2>
            <div className={style.info}>
                <p className={style.notickets}>No tickets yet!</p>
            </div>
        </div>
        )
    }
    return (
        <div className={`${style['stats-container-on']} ${'stats'}`}>
            <h2 className={style.h2}>Stats</h2>
            <div className={style.info}>
                <p>You have spent a total of {spentCash} RON on tickets.</p>
                <p className={style['combinations-title']}>Out of {ticketNumbers} tickets you got: </p>
                <p className={style.three}>3/6 -{'>'} {combinations ? combinations[0] : 0} | Earnings : {combinations[0] * 30} RON</p>
                <p className={style.four}>4/6 -{'>'} {combinations ? combinations[1] : 0} | Earnings : {combinations[1] * 337} RON</p>
                <p className={style.five}>5/6 -{'>'} {combinations ? combinations[2] : 0} | Earnings : {combinations[2] * 9073} RON</p>
                <p className={style.six}>6/6 -{'>'} {combinations ? combinations[3] : 0}  | Earnings : {combinations[3] * 353850} RON</p>
            </div>
            <div className={style['container-right']}>
                <div className='fact-control'>
                    <ul className={style['fact-list']}>
                     <li className={style.fact}>Assuming that each ticket costs exactly 7 RON and you play one ticket a week.</li>
                     <li className={style.fact}>The estimated year for submitting all tickets would be: <span className={style['date-info']}>{2022 + (parseInt(ticketNumbers / 52))}</span></li>
                     <li className={style.fact}> The amount of money you have spent on the tickets is equivalent to {(spentCash / 5200).toFixed(1)} brand new MacBooks!</li>
                  </ul>
                </div>
            </div>
        </div>
    )
};

export default Stats;
