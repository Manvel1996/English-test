import React from 'react'
import WelcomeSppech from '../Start/WelcomeSppech';
import A from '../Alphabet/A/A';
import B from '../Alphabet/B/B';
import C from '../Alphabet/C/C';
import D from '../Alphabet/D/D';
import E from '../Alphabet/E/E';
import F from '../Alphabet/F/F';
import G from '../Alphabet/G/G';
import H from '../Alphabet/H/H';
import I from '../Alphabet/I/I';
import J from '../Alphabet/J/J';
import K from '../Alphabet/K/K';
import L from '../Alphabet/L/L';
import M from '../Alphabet/M/M';
import N from '../Alphabet/N/N';
import O from '../Alphabet/O/O';
import P from '../Alphabet/P/P';
import Q from '../Alphabet/Q/Q';
import R from '../Alphabet/R/R';
import S from '../Alphabet/S/S';
import T from '../Alphabet/T/T';
import U from '../Alphabet/U/U';
import V from '../Alphabet/V/V';
import W from '../Alphabet/W/W';
import X from '../Alphabet/X/X';
import Y from '../Alphabet/Y/Y';
import Z from '../Alphabet/Z/Z';
import Finish from '../Finish/Finish';
import A2 from '../Alphabet/A/A2';
import B2 from '../Alphabet/B/B2';
import C2 from '../Alphabet/C/C2';
import D2 from '../Alphabet/D/D2';
import E2 from '../Alphabet/E/E2';
import F2 from '../Alphabet/F/F2';
import G2 from '../Alphabet/G/G2';
import H2 from '../Alphabet/H/H2';
import I2 from '../Alphabet/I/I2';
import J2 from '../Alphabet/J/J2';
import K2 from '../Alphabet/K/K2';
import L2 from '../Alphabet/L/L2';
import M2 from '../Alphabet/M/M2';
import N2 from '../Alphabet/N/N2';
import O2 from '../Alphabet/O/O2';
import P2 from '../Alphabet/P/P2';
import Q2 from '../Alphabet/Q/Q2';
import R2 from '../Alphabet/R/R2';
import S2 from '../Alphabet/S/S2';
import T2 from '../Alphabet/T/T2';
import U2 from '../Alphabet/U/U2';
import V2 from '../Alphabet/V/V2';
import W2 from '../Alphabet/W/W2';
import X2 from '../Alphabet/X/X2';
import Y2 from '../Alphabet/Y/Y2';
import Z2 from '../Alphabet/Z/Z2';
import EgnlishWords from '../English words/EgnlishWords';

export default function Reducer(state,action){
    let randomNum = Math.floor(Math.random()*3 + 1)
    if(action.type === "start"){
        return {...state, initialState: <WelcomeSppech />}
    }
    else if(action.type === "correct_answer"){
        return{
            ...state,
            correct_answer:true,
            wrong_answer:false}
    }
    else if(action.type === "wrong_answer"){
        return{
            ...state,
            wrong_answer: action.payload}
    }
    else if(action.type === "RandomWords"){
        return{...state,initialState: <EgnlishWords />}
    }
    else if(action.type === "trueWord"){
        if(state.words.length > state.random + randomNum){
            return {...state,random:state.random+randomNum,correct_answer:false}
        }
        else if(state.words.length <= state.random + randomNum){
            return {...state,random:0,correct_answer:false}
        }
    }
    else if(action.type === "counter"){
        return{...state,counter:state.counter + 1}
    }
    else if(action.type === "a"){
      return {...state, initialState: <A />,correct_answer:false}
    }
    else if(action.type === "A2"){
        return {...state,initialState: <A2/>,correct_answer:false}
    }
    else if(action.type === "b"){
      return {...state, initialState: <B />,correct_answer:false}
    }
    else if(action.type === "B2"){
        return {...state,initialState: <B2/>,correct_answer:false}
    }
    else if(action.type === "c"){
        return {...state, initialState: <C />,correct_answer:false}
    }
    else if(action.type === "C2"){
        return {...state,initialState: <C2 />,correct_answer:false}
    }
    else if(action.type === "d"){
        return {...state, initialState: <D />,correct_answer:false}
    }
    else if(action.type === "D2"){
        return {...state,initialState: <D2 />,correct_answer:false}
    }
    else if(action.type === "e"){
        return {...state, initialState: <E />,correct_answer:false}
    }
    else if(action.type === "E2"){
        return {...state,initialState: <E2 />,correct_answer:false}
    }
    else if(action.type === "f"){
        return {...state, initialState: <F />,correct_answer:false}
    }
    else if(action.type === "F2"){
        return {...state,initialState: <F2 />,correct_answer:false}
    }
    else if(action.type === "g"){
        return {...state, initialState: <G />,correct_answer:false}
    }
    else if(action.type === "G2"){
        return {...state,initialState: <G2 />,correct_answer:false}
    }
    else if(action.type === "h"){
        return {...state, initialState: <H />,correct_answer:false}
    }
    else if(action.type === "H2"){
        return {...state,initialState: <H2 />,correct_answer:false}
    }
    else if(action.type === "i"){
        return {...state, initialState: <I />,correct_answer:false}
    }
    else if(action.type === "I2"){
        return {...state,initialState: <I2 />,correct_answer:false}
    }
    else if(action.type === "j"){
        return {...state, initialState: <J />,correct_answer:false}
    }
    else if(action.type === "J2"){
        return {...state,initialState: <J2 />,correct_answer:false}
    }
    else if(action.type === "k"){
        return {...state, initialState: <K />,correct_answer:false}
    }
    else if(action.type === "K2"){
        return {...state,initialState: <K2 />,correct_answer:false}
    }
    else if(action.type === "l"){
        return {...state, initialState: <L />,correct_answer:false}
    }
    else if(action.type === "L2"){
        return {...state,initialState: <L2 />,correct_answer:false}
    }
    else if(action.type === "m"){
        return {...state, initialState: <M />,correct_answer:false}
    }
    else if(action.type === "M2"){
        return {...state,initialState: <M2 />,correct_answer:false}
    }
    else if(action.type === "n"){
        return {...state, initialState: <N />,correct_answer:false}
    }
    else if(action.type === "N2"){
        return {...state,initialState: <N2 />,correct_answer:false}
    }
    else if(action.type === "o"){
        return {...state, initialState: <O />,correct_answer:false}
    }
    else if(action.type === "O2"){
        return {...state,initialState: <O2 />,correct_answer:false}
    }
    else if(action.type === "p"){
        return {...state, initialState: <P />,correct_answer:false}
    }
    else if(action.type === "P2"){
        return {...state,initialState: <P2 />,correct_answer:false}
    }
    else if(action.type === "q"){
        return {...state, initialState: <Q />,correct_answer:false}
    }
    else if(action.type === "Q2"){
        return {...state,initialState: <Q2 />,correct_answer:false}
    }
    else if(action.type === "r"){
        return {...state, initialState: <R />,correct_answer:false}
    }
    else if(action.type === "R2"){
        return {...state,initialState: <R2 />,correct_answer:false}
    }
    else if(action.type === "s"){
        return {...state, initialState: <S />,correct_answer:false}
    }
    else if(action.type === "S2"){
        return {...state,initialState: <S2 />,correct_answer:false}
    }
    else if(action.type === "t"){
        return {...state, initialState: <T />,correct_answer:false}
    }
    else if(action.type === "T2"){
        return {...state,initialState: <T2 />,correct_answer:false}
    }
    else if(action.type === "u"){
        return {...state, initialState: <U />,correct_answer:false}
    }
    else if(action.type === "U2"){
        return {...state,initialState: <U2 />,correct_answer:false}
    }
    else if(action.type === "v"){
        return {...state, initialState: <V />,correct_answer:false}
    }
    else if(action.type === "V2"){
        return {...state,initialState: <V2 />,correct_answer:false}
    }
    else if(action.type === "w"){
        return {...state, initialState: <W />,correct_answer:false}
    }
    else if(action.type === "W2"){
        return {...state,initialState: <W2 />,correct_answer:false}
    }
    else if(action.type === "x"){
        return {...state, initialState: <X />,correct_answer:false}
    }
    else if(action.type === "X2"){
        return {...state,initialState: <X2 />,correct_answer:false}
    }
    else if(action.type === "y"){
        return {...state, initialState: <Y />,correct_answer:false}
    }
    else if(action.type === "Y2"){
        return {...state,initialState: <Y2 />,correct_answer:false}
    }
    else if(action.type === "z"){
        return {...state, initialState: <Z/>,correct_answer:false}
    }
    else if(action.type === "Z2"){
        return {...state,initialState: <Z2 />,correct_answer:false}
    }
    else if(action.type === "finish"){
        return {...state, initialState: <Finish />,correct_answer:false}
    }
    else return {...state}
}
