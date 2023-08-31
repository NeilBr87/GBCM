import React, { useState, useEffect } from 'react';
import Nero from './Nero.JPG';
import './style.css';

export default function Page() {
    const [chrisAttendance, setChrisAttendance] = useState(null);
    const [gregAttendance, setGregAttendance] = useState(null);
    const [neilAttendance, setNeilAttendance] = useState(null);

    useEffect(() => {
        // Fetch initial attendance data when the component mounts
        fetchAttendance();
    }, []);

    async function fetchAttendance() {
        try {
            const response = await fetch('https://gbcm.netlify.app//attendance');
            if (response.ok) {
                const attendanceData = await response.json();
                setChrisAttendance(attendanceData.find(item => item.name === 'Chris') || null);
                setGregAttendance(attendanceData.find(item => item.name === 'Greg') || null);
                setNeilAttendance(attendanceData.find(item => item.name === 'Neil') || null);
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function handleAttendance(id, isComing) {
        try {
            const response = await fetch(`https://gbcm.netlify.app//attendance/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isComing })
            });

            if (response.ok) {
                // Update local state directly from the response
                const updatedAttendance = await response.json();
                if (id === 1) {
                    setChrisAttendance(updatedAttendance);
                } else if (id === 2) {
                    setGregAttendance(updatedAttendance);
                } else if (id === 3) {
                    setNeilAttendance(updatedAttendance);
                }
            } else {
                console.error(`Error updating attendance for ID ${id}.`);
            }
        } catch (error) {
            console.error(error);
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
            <table style={{margin: '0 auto'}}>
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
            <h5 style={{color: 'red'}}>Good boys only!</h5>
        </div>
    );
}
