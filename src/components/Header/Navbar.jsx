import React, {useState} from 'react';
import style from './navbar.module.css'
import mainlogo from './logo.png'
import usericon from './good.png'
import Balance from './Balance';

const Navbar = ({selectedCurrency, user, balance, userprofit}) => {

// 250 110

    return (
    <div className='navbar'>
        <nav className={style.nav}>
         <ul className={style.ul}>
           <li><a className={style.logo} href='*'><img className={style.img} src={mainlogo} width='290px' height='130px'/></a></li> 
           <div className={style['right-container']}>
           <li> <Balance selectedCurrency={selectedCurrency} balance={userprofit} user={user}/> </li>
           <li><a className={style.a} href='*'><img className={style.guest} src={usericon} width='50px' height='50px' /><span className={style.span}>{user}</span></a></li>
           </div>
         </ul>
        </nav>
    </div>
    )
};

export default Navbar;


