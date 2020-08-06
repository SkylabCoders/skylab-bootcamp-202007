import React from 'react';
import './../css/Options.css';
import Answer from './Answer';
import { NavLink } from 'react-router-dom';

function Option(props) {
    let answer;

     const handleAnswer = ()=>{ 
        console.log(props.type)

        if(props.type.correct_answer === props.option){
            console.log('Respuesta correcta!')
            answer = true;
            return (
                <>
                    <Answer respuesta={answer}/>
                 </>
            )
         }else{
            console.log('Respuesta incorrecta!')
            answer = false;
            return (
                <>
                    <Answer respuesta={answer}/>
                 </>
            )
         }
        }
        
    return (
        <>  
         <NavLink to='/answer' respuesta={answer}>
            <li className="answer__item" onClick={()=> handleAnswer()}> {props.option} </li>
        </NavLink>   
        </>
    )
}

export default Option;