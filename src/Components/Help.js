import React from 'react'
import './Help.css';
import eyes from '../Assets/eyes.gif'


const Help = () => {
  return (
    <>
        <div className='help_container'>
            <div className="box">
                <h1>[-- HELP --]</h1>
                <p>
                <span className='help_span'><u>Claim:</u></span>  You can always win this game.<br/>
                </p>

                <p>
                <span className='help_span'><u>Instructions:</u></span> <br/>
                You have to predict one secret number between 1 to 20.<br/>
                Your initial score will be 100.<br/>
                Everytime you predict the wrong output, a message will be displayed stating wether the current guess is less than or greater than secret number.<br/>
                Score will be reduced by 1 if your guess is wrong.<br/>
                Here is one catch : you have only 7 chances.<br/>
                </p>
                {/* <button id="hint_btn">Hint</button> */}
                <img id="eyes" src={eyes} alt="" />
                <h3 id='hint'>Use Binary Search Approach</h3>
            </div>
        </div>
    </>
  )
}

export default Help
