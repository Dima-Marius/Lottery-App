import React from 'react';
import style from './simulation.module.css'
import SimulationItem from './SimulationItem/SimulationItem';

const Simulation = ({userTickets}) => {
    
    return (
        <div className={style['simulation-container']}>
            {userTickets.map(item => <SimulationItem userNumbers={item.userNumbers}
            randomTicket={item.randomTicket} attempts={item.attempts} yearsTime={item.yearsTime}
            spent={item.spent} profit={item.profit} matches={item.matches}/>)}
        </div>
    )
};

export default Simulation;


