import React, { useContext } from 'react'
import { dispatcher } from '../App' 


export default function Finish() {

  const [state,dispatch] = useContext(dispatcher)

  return (
    <div className='finish'>
      <h2>Դուք սխալվել եք <span>{state.counter}</span> անգամ</h2>
      <p>Ապրեք դուք սովորեցիք կամ վերհիշեցիք թե ինչպես են կոչվում անգլերեն տառերը հայերենում:
        <br/>
        Հիմա դուք կարող եք նորից անցնել կամ ցանկացած պահի հետ գալ և վերհիշել:
      </p>
      <button onClick={()=>dispatch({type:"start"})}>Կրկնել</button>
    </div>
  )
}
