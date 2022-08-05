import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import '../Components/Main.css';
import { Link } from 'react-router-dom';
import lost from "../Assets/lost-gif.gif";
import win2 from "../Assets/won-gif.gif";
import tiger from "../Assets/tiger_thinking.png";
import man from '../Assets/man_sitting.png';
import win_sound from '../Assets/win_sound.mp3'
import lost_sound from '../Assets/lost_sound.mp3'
// import Spline from '@splinetool/react-spline';
// import man from '../Assets/man_sitting.png';


export const Main = (props) => {
function TransitionRight(props) {
    return <Slide {...props} direction="left" />;
  }
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
  
    const handleClick = (Transition) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // let x = Math.floor(Math.random() * 100) + 1;
    
    const [number, setNumber] = useState('0');
    var [count, setCount] = useState('7');

    const func = (e) => {
        
        var n = document.getElementById('inputtext').value;
        setNumber(n);
        document.getElementById('inputtext').value = "";
        e.preventDefault();
        if(n===props.x){
            document.getElementById('message').innerHTML = "You Won!!!";
            document.getElementById('win_div_id').style.display = 'block';
            var win_audio = new Audio(win_sound);
            win_audio.play();
            return;
        }
        // if(count===1){
        //     document.getElementById('message').innerHTML = "<p>Last Chance<p/>";
        // }
        
        if(count-1===0 && n!==props.x){
            var lost_audio = new Audio(lost_sound);
            lost_audio.play();
            document.getElementById('message').innerHTML = "<p>😕You're out of Chances😕<br> Please Restart the Game</p>";
            document.getElementById('chance_display').innerHTML = "<p>You Lost<p/>";
            document.getElementById('lost_img').style.animation = 'lost_walk 14s linear 1';
            document.getElementById('floating_lost_msg').style.animation = 'float_lost_msg 14s linear 1';
            // document.getElementById('lost_div_id').style.transition = 'max-width 0.3s ease-out;';
            document.getElementById('lost_div_id').style.display = 'flex';
            console.log("You're out of Chances");
            setTransition(() => TransitionRight);
            setOpen(true);
            return;
        }
        if(n<1 || n>100){
            document.getElementById('message').innerHTML = "<h4>Your guess should be between 0 and 100</h4>";
        }
        else if(n>props.x){
            document.getElementById('message').innerHTML = "Too Large";
            setCount(count-1);
        }
        else if(n<props.x){
            document.getElementById('message').innerHTML = "Too Small";
            setCount(count-1);
        }
        else if(n===props.x){
            document.getElementById('message').innerHTML = "You Won!!!";
            setCount(count-1);
            return;
        }
        if(count-1===1){
            // console.log("You're out of Chances");
            // setTransition(() => TransitionRight);
            document.getElementById('chance_display').innerHTML = "<p>Last Chance<p/>";
            // setOpen(true);
            return;
        }
    }

    const reload_func = () => {
        window.location.reload(true);
    }

    return (
        <>
        {/* <div className="container"> */}
            <div className="navbar">
                <h1>GUESS MY NUMBER !!!</h1>
            </div>
            <div className="body">
                <div className="left">
                    <form>
                        <input id = "inputtext" type="text" name="textie" />
                        <Button 
                            sx={{ fontFamily : 'Mouse Memoirs', fontSize : "25px", backgroundColor : "rgb(0, 255, 81)", color : "black", borderRadius : "0px", borderBottomLeftRadius : "23px", borderBottomRightRadius : "23px", height : "70px", border : "0px", 
                            
                            }} 
                            
                            variant="contained" onClick={func}>Check!</Button>
                    </form>
                    <img id="tiger" src={tiger} alt="Loading..." />
                </div>
                <div className="right">
                    <div id="message">
                        😃Guess My Number between 1 and 100😃
                    </div>
                    <div className="score" >
                        <span id='chance_display'>{count} Chances Remaining</span>
                        <hr/>
                        Score : {93+parseInt(count)}<br/>   
                        {/* {props.x} */}
                    </div>
                </div>
                <Snackbar
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={transition}
                    key={transition ? transition.name : ''}
                    autoHideDuration={5000} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize : "20px", position : "relative", left : "1100px"}}>
                    You're out of Chances! Please Restart the Game.
                </Alert>
                </Snackbar>
            </div>
            
            <div className="lost_div" id='lost_div_id'>
                <span id="lost_msg_2">😕You Lost😕</span>
                <button id='restart_btn_2' onClick={reload_func}>Restart</button>
                <span id='floating_lost_msg'>YOU LOST</span>
                <img id="lost_img" src={lost} alt="Loading..." />
            </div>
            <div className="win_div" id='win_div_id'>
                {/* <img id="win-img" src={win} alt="Loading..." /> */}
                <span id="win_msg">
                    🎉Congratulations!!!🥳<br/>
                    🎊YOU WON🎊<br/>
                    <button id='restart_btn' onClick={reload_func}>Play Again</button>
                </span>
                <img id="win_img" src={win2} alt="Loading..." />
            </div>
            <div className="footer">
                <p><a href='https://www.linkedin.com/in/siddheshbn/' target="_blank">Copyright© Siddhesh Nakade</a> </p>
            </div>
            <img id="man" src={man} alt="Loading..." />
            <div className="help_div">
                <Link to='/help' id='help_btn'><u>Help</u></Link>
                {/* Help */}
            </div>
            {/* <Spline id="spline" scene="https://prod.spline.design/zQnme0PgQZ6ivYAp/scene.splinecode" /> */}
        {/* </div> */}
        {/* <div className="container">
            <h1 id='name1'>This is the Random No. --- {props.x}</h1>
            <h1 id='name2'>This is the Your No. --- {number}</h1>
            <h1 id='name2'>Remaining Count --- {count}</h1>

            
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            
            <Button onClick={handleClick(TransitionRight)}>Left</Button>
            <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message="You're out of Chances! Please Restart the Game."
                key={transition ? transition.name : ''}
            />
            <Alert severity="error">This is an error message!</Alert>
            <Alert severity="warning">This is a warning message!</Alert>
            <Alert severity="info">This is an information message!</Alert>
            <Alert severity="success">This is a success message!</Alert>
        </div> */}
    </>
  )
}

// import Spline from '@splinetool/react-spline';

// export default function App() {
//   return (
//     <Spline scene="https://prod.spline.design/zQnme0PgQZ6ivYAp/scene.splinecode" />
//   );
// }
