import React from 'react';
import MaxPic from './Max.jpg';
import './style.css';

export default function Max() {

    return (
        <div id="max">
        <h1 style={{width: '100vw', margin: '0 auto', color: '#EFCB68'}}>A special GBCM announcement</h1>
        <div  style={{width: '80vw', margin: '0 auto', color: '#EFCB68'}}>
            <h3>On behalf of all the Good Boys</h3>
            <h3>We wish to give a warm welcome to the world to Max Christoper Manlow!</h3>
            <h3>09/12/2023!</h3>
            <img src={MaxPic} alt="Max" style={{width: '50vw', height: '45vw', margin: '0 auto', borderRadius: '50%', border: '5px inset #EFCB68'}} />
            <h4>We wish him a pleasurable yet short stay at the hospital followed by a lovely Christmas at his new home with mummy and daddy!</h4>
        </div>
        </div>
    )
}