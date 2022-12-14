import React, { useContext } from 'react'
import { dispatcher } from '../App' 

export default function WelcomeSppech() {

const [,dispatch] = useContext(dispatcher)


  return (
    <div>
      <p className='welcome-speech'>Ողջույն հիմա մենք կփորձենք սովորել կամ եթե արդեն գիտես ուրեմն վերհիշել անգլերեն տառերը և բառերը հայերենում </p>
      <button onClick={()=>dispatch({type:"a"})} className="startButton">Հեշտ</button>
      <button onClick={()=>dispatch({type:"A2"})} className="startButton">Միջին</button>
      <button onClick={()=>dispatch({type:"RandomWords"})} >Բառեր</button>
    </div>
  )
}
