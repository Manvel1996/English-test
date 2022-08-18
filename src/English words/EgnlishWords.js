import React, { useContext } from 'react'
import {  dispatcher } from '../App'
import { v4 as uuidv4 } from 'uuid';


export default function EgnlishWords() {
    const [state,dispatch] = useContext(dispatcher)

  


    function clickVersion(e){
        if(e.target.innerText === state.words[state.random].correctWord){
            dispatch({type:"correct_answer"})
            setTimeout(()=>{
                dispatch({type:"trueWord"})
            },1000)
        }
        
        else if(e.target !== e.currentTarget){
            dispatch({type:"counter"})
            if(!state.correct_answer){
                dispatch({type:"wrong_answer",payload:true})
                setTimeout(()=>dispatch({type:"wrong_answer",payload:false}),500)
            }
        }
      }

  return (
    <div>
        <p>Ինչպես է անգլերենում գրվում <span>{state.words[state.random].armVersion}</span> </p>
        <p>Կարդացվում է <span>{state.words[state.random].englishVersion}</span></p> 
        <p>Դուք սխալվել եք <span>{state.counter}</span> անգամ</p>
        <div className='words-board' onClick={(e)=>clickVersion(e)}>
            {state.words[state.random].versions.map(el=><h2 key={uuidv4()}>{el}</h2>)}
        </div>
        <button onClick={()=>dispatch({type:"start"})} className="startButton">Սկիզբ</button>
    </div>
  )
}
