import React, {  useReducer, useState } from 'react';
import './App.scss';
import { arrWords } from './English words/WordsArr';
import Reducer from './Reducer/Reducer';
import WelcomeSppech from './Start/WelcomeSppech';
import { GoUnmute,GoMute } from 'react-icons/go';

export const dispatcher = React.createContext()

function App() {
  const[mute,setMute] = useState(false)

  const[state,dispatch] = useReducer(Reducer,{
   initialState: <WelcomeSppech/>,
   wrong_answer:false,
   correct_answer:false,
   words: arrWords,
   random: Math.floor(Math.random()*10),
   counter:0,
  });



 return (

   <div className="app">
      <dispatcher.Provider value={[state,dispatch]}>
        {state.initialState}
      </dispatcher.Provider>
      <button className='muteButton' onClick={()=>setMute(!mute)}>{mute?<GoMute/>:<GoUnmute/>}</button>
      {state.correct_answer && <p className='correct_answer block_none'>Ճիշտ է 
      {mute?null: <audio   autoPlay type="audio/mp3" src='https://cdn.pixabay.com/download/audio/2021/08/04/audio_c201b79c03.mp3?filename=correct-6033.mp3'></audio>}
        </p>}
      {state.wrong_answer && <p className='wrong_answer block_none'>Սխալ է
      {mute?null:<audio   autoPlay type="audio/mp3"  src='https://cdn.pixabay.com/download/audio/2021/08/04/audio_c6ccf3232f.mp3?filename=negative_beeps-6008.mp3'> </audio>}
      </p>}     
    </div>
  );
}

export default App;
