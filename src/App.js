import logo from './logo.svg';
import './App.css';
import { Main } from "./Components/Main";
import Help from './Components/Help';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import Button from '@mui/material/Button';
// import horray from './Components/hooray-sponge-bob.gif'
// import lost from './Components/lost-gif.gif';
// import win from './Components/win-gif.gif';

function App() {
  
  let x = Math.floor(Math.random() * 100) + 1;
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main x={x} />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </BrowserRouter>
      
        {/* <Main x={x} />
        <Help /> */}
        {/* <img src={horray} alt="Loading..." />
        <img src={win} alt="Loading..." /> */}
      </div>
    </>
  );
}

export default App;