import React,{useState} from 'react';
import wallet from './wallet.png'
import style from './balance.module.css'

const Balance = ({selectedCurrency, balance,user}) => {


    return (
        <div className={`${ !user ? style.hide : style['balance-container']} `}>
            <span className={style.span}>{balance} {selectedCurrency}</span>
          <a className='aa' href='*'>
          <img className={`${style.wallet} ${style.money}`}
          src={wallet} width='55px' height='55px'/></a>
        </div>
    )
}

export default Balance;