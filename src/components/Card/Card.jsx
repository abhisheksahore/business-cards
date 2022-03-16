import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, faEye, faPen} from '@fortawesome/free-solid-svg-icons'
import './Card.css';

function Card(props) {
  return (
    <div className='card_container'>
        {/* <div style={{color: "orangered"}}>Abhishek's new business card</div>        
        <div>{props.url}</div>        
        <div>18mb</div>        
        <div>17 June 2021 at 21:46</div>        
        <div className='card_controls'>
            <div className='tooltip_container'><div className='tooltip_text'>Edit</div><FontAwesomeIcon className='tooltip' icon={faPen} /></div>    
            <div className='tooltip_container'><div className='tooltip_text'>Preview</div><FontAwesomeIcon className='tooltip' icon={faEye} /></div>    
            <div className='tooltip_container'><div className='tooltip_text'>Delete</div><FontAwesomeIcon className='tooltip' icon={faTrash} /></div>    
        </div>         */}

        <div className='card_wrapper'>
            <div className='card_name'>name of the card</div>
        </div>
    </div>
  )
}

export default Card