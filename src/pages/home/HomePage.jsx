import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/profile");
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>Dashboard</h2>
            <div>
                <button onClick={handleClick}>Profile</button>
            </div>
        </div>
    )
}
