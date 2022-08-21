import React, { useContext } from 'react'
import {  dispatcher } from '../App'
import { v4 as uuidv4 } from 'uuid';


export default function LogicFunc(letter,next_letter,armLetter,back_button,arr_letters) {
    const [state,dispatch] = useContext(dispatcher)

    function clickVersion(e){
        if(e.target.innerText === letter){
            dispatch({type:"correct_answer"})
            setTimeout(()=>{
                dispatch({type:next_letter})
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
        <p>Որն է անգլերենում <span>{armLetter}</span> տառը  </p>
        <p>Դուք սխալվել եք <span>{state.counter}</span> անգամ</p>
        <div className='alphabet-board' onClick={(e)=>clickVersion(e)}>
            {arr_letters.map(el=><h2 key={uuidv4()}>{el}</h2>)}
        </div>
        <button onClick={()=>dispatch({type:back_button})}>Նախորդը</button>
        <button onClick={()=>dispatch({type:next_letter})}>Հաջորդը</button>
        <button onClick={()=>dispatch({type:"start"})} className="startButton">Սկիզբ</button>
    </div>
  )
}
