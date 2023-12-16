import React from 'react';
import {useState} from 'react';
import Djok from './Djok.JPG';
import Page from '../Page';
import './style.css';

export default function IntroPage() {

    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(true);
    }
    
    return (
        <div>
        {!clicked && (
        <div id="introPage">
            <h3 style={{marginTop: '-10%'}}>Click on the good boy to begin</h3>
            <img onClick={handleClick} src={Djok} alt="Djok" id="djok" />
        </div>)}

        {clicked && (
            <Page />
        )}

        </div>
    )
}