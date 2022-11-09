import Navbar from './components/Header/Navbar';
import MainContainer from './components/Main/MainContainer';
import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import { flushSync } from 'react-dom';
import './App.css';
import './grid.css'

function App() {

  const [openModal, setOpenModal] = useState(true)
  const user = 'Guest' // prompt('enter your name')
  const [username, setUsername] = useState('')
  const balance = 0;
  const [userBalance, setUserBalance] = useState(0)
  const [hideBalance, setHideBalance] = useState(true)
  const [userprofit, setProfit] = useState(0)
  const [placeholder, setPlaceholder] = useState(0)
  const [selectedCurrency, setSelectedCurrency] = useState('RON')
  
  const onGetProfit = (data) => {
    setProfit(data)

  }
  const onUserName = (data,closeModal) => {
    setUsername(`${data ? 'Hi ' + data : 'Hi Guest'}`)
    setOpenModal(closeModal);
    setHideBalance(false)
  }

  const passCurency = (data) => {
    setSelectedCurrency(data)
  }

  return (
    <div className="App">
      <div className='app-container'>
        <div className='min-rez'><p className='min-rez'>Resolution currently not supported.</p></div>
        <Modal onUserName={onUserName} openModal={openModal} />
        <Navbar selectedCurrency={selectedCurrency} userprofit={userprofit} isModalOpenHideBalance={hideBalance} user={username} balance={userBalance}/>
        <MainContainer passCurency={passCurency} onGetProfit={onGetProfit}/>
      </div>
    </div>
  );
}

export default App;
