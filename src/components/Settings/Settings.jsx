import React, {useState} from 'react';
import style from './settings.module.css'

const Settings = (props) => {

    //state

    const [ticketNumbers, setTicketNumbers] = useState(0)
    const [inputValue, setInputValue] = useState('')

    // handlers

    const onPickNumbers = (e) => {
      props.onPickNumbers(e.target.value)
    }

    const dropDownHandler = (e) => {
        props.onSelectCurrency(e.target.value)
    }


    const formSubmitHandler = (e) => {
        e.preventDefault();
    props.onTicketNumbers(ticketNumbers);
    setInputValue('')
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value)
        setTicketNumbers(e.target.value)
    }

    // DOM
    return (
        <div className={`${style['main-container']} ${'settings-container'}`}>
            <h2 className={style.h2}>Settings</h2>
             <form onSubmit={formSubmitHandler} className={style.form}>
               <div className='form-control'>
                   <label htmlFor='pickedNumbers'>Pick your numbers: </label>
                   <input onChange={onPickNumbers} className={style.pickedNumbers} id='pickedNumbers' type='text'></input>
               </div>
               <div className='form-control'>
                   <label htmlFor='numOfTickets'>Number of tickets: </label>
                   <input onChange={inputHandler} value={inputValue} className={style.ticketsNumber} id='numOfTickets' type='number'></input>
               </div>
               <div className='form-control'>
                   <label htmlFor="cars">Currency:</label>
                    <select className='custom-select' onChange={dropDownHandler} name="cars" id="cars">
                    <option value="RON">RON</option>
                    <option value="EURO">EURO</option>
                        </select>
                        <div>
                         <button className={style.submit}type='submit'>Start</button>
                    </div>
                </div>
            </form>
            <button className={style.clear} onClick={props.clearHandler}>clear</button>
        </div>
    )
};

export default Settings


