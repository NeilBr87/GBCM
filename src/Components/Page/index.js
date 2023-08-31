import React, { useState, useEffect } from 'react';
import Nero from './Nero.JPG';
import './style.css';

// Import the JSON data
import attendanceData from '../Data/data.json';

export default function Page() {
    const [chrisAttendance, setChrisAttendance] = useState(null);
    const [gregAttendance, setGregAttendance] = useState(null);
    const [neilAttendance, setNeilAttendance] = useState(null);

    useEffect(() => {
        // Set initial attendance data when the component mounts
        setChrisAttendance(attendanceData.find(item => item.name === 'Chris') || null);
        setGregAttendance(attendanceData.find(item => item.name === 'Greg') || null);
        setNeilAttendance(attendanceData.find(item => item.name === 'Neil') || null);
    }, []);

    async function handleAttendance(id, isComing) {
        // Simulate a PATCH request by updating the local JSON data
        const updatedData = attendanceData.map(item => {
            if (item.id === id) {
                return { ...item, isComing };
            }
            return item;
        });

        // Update the local state with the modified data
        if (id === 1) {
            setChrisAttendance(updatedData.find(item => item.name === 'Chris') || null);
        } else if (id === 2) {
            setGregAttendance(updatedData.find(item => item.name === 'Greg') || null);
        } else if (id === 3) {
            setNeilAttendance(updatedData.find(item => item.name === 'Neil') || null);
        }
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
                <p id="nextFriday">Friday 1st September</p>
            </div>
            <h1>Attendance List</h1>
            <table style={{ margin: '0 auto' }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chris</td>
                        <td>
                            <button onClick={() => handleAttendance(1, true)} className="yesButton">Coming</button>
                            <button onClick={() => handleAttendance(1, false)} className="noButton">Not coming</button>
                        </td>
                        <td>
                            {chrisAttendance ? (
                                chrisAttendance.isComing ? <span style={{ color: 'green' }}>Coming!</span> : <span style={{ color: 'red' }}>Not coming</span>
                            ) : (
                                <span>Loading...</span>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Greg</td>
                        <td>
                            <button onClick={() => handleAttendance(2, true)} className="yesButton">Coming</button>
                            <button onClick={() => handleAttendance(2, false)} className="noButton">Not coming</button>
                        </td>
                        <td>
                            {gregAttendance ? (
                                gregAttendance.isComing ? <span style={{ color: 'green' }}>Coming!</span> : <span style={{ color: 'red' }}>Not coming</span>
                            ) : (
                                <span>Loading...</span>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td>Neil</td>
                        <td>
                            <button onClick={() => handleAttendance(3, true)} className="yesButton">Coming</button>
                            <button onClick={() => handleAttendance(3, false)} className="noButton">Not coming</button>
                        </td>
                        <td>
                            {neilAttendance ? (
                                neilAttendance.isComing ? <span style={{ color: 'green' }}>Coming!</span> : <span style={{ color: 'red' }}>Not coming</span>
                            ) : (
                                <span>Loading...</span>
                            )}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h5>Let us know if you want to be added.</h5>
            <h5 style={{ color: 'red' }}>Good boys only!</h5>
        </div>
    );
}
