import React, { useState } from 'react';
import style from './modal.module.css'
import modalImage from './modal.jpg'

const Modal = ( {openModal,onUserName} ) => {


    const formSubmitHandler = (e) => {
        e.preventDefault();
        onUserName(e.target[0].value,false);
    }


    if (!openModal) { return null }
  return (
    <React.Fragment>
    <div className={style.overlay}></div>
    <div className={style['modal-container']}>
        <div className={style.photo}><img className={style.modalImage} src={modalImage} width='100%' height='100%' alt='Lottery Image'></img></div>
        <div className={style.right}>
          <div className={style['close-button']}>X</div>
          <div className={style['title-container']}>
            <div className={style.title}>Welcome to my lottery app!</div>
          </div>
          <div className={style['info-container']}>
            <h2 className={style.h2}>Did you know?</h2>
            <div className={style.info}>
                <ul>
                <li>The chances of winning the lottery are nearly 1 in 300 million.</li>
                <li>Around 37,000 people became millionaires thanks to scratch tickets.</li>
                <li>48% of lottery winners continue working a daytime job.</li>
                </ul>
                <div className={style.features}>
                    <h2 className={style.featuresTitle}>Features</h2>
                    <ul className={style.featuresList}>
                        <li>Match your lottery ticket against thousands of RNG lottery tickets in a matter of seconds.</li>
                        <li>Show you the amount of cash RON/EUR spent on lottery tickets.</li>
                        <li>Tell you the exact date you'd have won the lottery assuming that you play one ticket a week.</li>
                        <li>And much more soon!</li>
                    </ul>
                    <a className={style.githublink} href='https://github.com/Shady1kx'>https://github.com/Shady1kx</a>
                </div>
                </div>
          </div>
          <div className={style['input-form']}>
            <form onSubmit={formSubmitHandler}>
                <label htmlFor='username'>Enter your name: </label>
                <input className={style.nameInput} id='username'/>
                <button className={style.submit} type='submit'>Continue</button>
            </form>
          </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Modal