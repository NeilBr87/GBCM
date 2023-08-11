import React, {useState} from 'react';
import Nero from './Nero.JPG';
import './style.css';

export default function Page() {
    const [chrisYes, setChrisYes] = useState(true);
    const [gregYes, setGregYes] = useState(true);
    const [neilYes, setNeilYes] = useState(true);

    function handleChrisYes() {
        setChrisYes(true);
    }

    function handleChrisNo() {
        setChrisYes(false);
    }

    function handleGregYes() {
        setGregYes(true);
    }

    function handleGregNo() {
        setGregYes(false);
    }

    function handleNeilYes() {
        setNeilYes(true);
    }

    function handleNeilNo() {
        setNeilYes(false);
    }

    return (
        <div>
            <div>
                <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: '#0D79B3', marginTop: '-2px', textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black' }}>G  B  C M</h1>
                <h5 style={{ fontSize: '22px', color: '#0D79B3', marginTop: '-15%', textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}>Good Boys Coffee Morning</h5>
            </div>

            <img src={Nero} alt="Nero" id="nero" />

            <div id="text">
                <p className="pageText">Friday morning, 7.15 approx</p>
                <p className="pageText">Nero, Oxted High Street</p>
            </div>

            <div style={{ marginTop: '10%' }}>
                <p className="pageText">Next GBCM:</p>
                <p id="nextFriday">Friday 18th August</p>
            </div>

            <div style={{ marginTop: '8%' }}>
                <h2 style={{marginBottom: '-2%'}}>Attendance</h2>
                <table style={{margin: '0 auto'}}>
                    <thead>
                        <tr>
                            <th>Good Boy</th>
                            <th>Coming</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chris</td>
                            <td><button onClick={handleChrisYes} className="yesButton">Fuck yeah</button><button onClick={handleChrisNo} className="noButton">No</button></td>
                            {chrisYes ? <td style={{color: 'green'}}>Coming!</td> : <td style={{color: 'red'}}>Not coming</td>}

                        </tr>
                        <tr>
                            <td>Greg</td>
                            <td><button onClick={handleGregYes} className="yesButton">Fuck yeah</button><button onClick={handleGregNo} className="noButton">No</button></td>
                            {gregYes ? <td style={{color: 'green'}}>Coming!</td> : <td style={{color: 'red'}}>Not coming</td>}
                        </tr>
                        <tr>
                            <td>Neil</td>
                            <td><button onClick={handleNeilYes} className="yesButton">Fuck yeah</button><button onClick={handleNeilNo} className="noButton">No</button></td>
                            {neilYes ? <td style={{color: 'green'}}>Coming!</td> : <td style={{color: 'red'}}>Not coming</td>}
                        </tr>
                    </tbody>
                </table>
                <p className="pageText">Let us know if you want your name added!</p>
            </div>
        </div>
    );
}
