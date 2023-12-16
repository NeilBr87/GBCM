import React, { useState, useEffect } from 'react';
import Nero from './Nero.JPG';
import './style.css';

// Import the JSON data
import attendanceData from '../Data/data.json';

export default function Page() {
    const [attendanceList, setAttendanceList] = useState([]);

    useEffect(() => {
        // Set initial attendance data when the component mounts
        setAttendanceList(attendanceData.attendance);
    }, []);

    async function handleAttendance(id, isComing) {
        const response = await fetch(`/api/updateAttendance/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ isComing }),
        });

        if (response.ok) {
            // Update the attendance list after successful update
            const updatedList = attendanceList.map(item => {
                if (item.id === id) {
                    return { ...item, isComing };
                }
                return item;
            });
            setAttendanceList(updatedList);
        } else {
            // Handle error case
            console.error('Failed to update attendance.');
        }
    }

    async function handleNotComing(id) {
        try {
            const response = await fetch(`/api/updateAttendance/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isComing: false }),
            });
    
            if (response.ok) {
                // Update the attendance list...
            } else {
                console.error('Response not OK:', response);
            }
        } catch (error) {
            console.error('Error in fetch:', error);
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
                    {attendanceList.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>
                                <button onClick={() => handleAttendance(item.id, true)} className="yesButton">Coming</button>
                                <button onClick={() => handleNotComing(item.id, false)} className="noButton">Not coming</button>
                            </td>
                            <td>
                                {item.isComing ? <span style={{ color: 'green' }}>Coming!</span> : <span style={{ color: 'red' }}>Not coming</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h5>Let us know if you want to be added.</h5>
            <h5 style={{ color: 'red' }}>Good boys only!</h5>
        </div>
    );
}
