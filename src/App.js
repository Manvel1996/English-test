import React, {  useReducer } from 'react';
import './App.scss';
import Reducer from './Reducer/Reducer';
import WelcomeSppech from './Start/WelcomeSppech';


export const dispatcher = React.createContext()

function App() {

  const[state,dispatch] = useReducer(Reducer,{
   initialState: <WelcomeSppech/>,
   wrong_answer:false,
   correct_answer:false,
   counter:0,
  });



 return (

   <div className="app">
      <dispatcher.Provider value={[state,dispatch]}>
        {state.initialState}
      </dispatcher.Provider>
      {state.correct_answer && <p className='correct_answer block_none'>Ճիշտ է</p>}
      {state.wrong_answer && <p className='wrong_answer block_none'>Սխալ է</p>}
    </div>
  );
}

export default App;
