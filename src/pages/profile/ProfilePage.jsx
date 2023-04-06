import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProfilePage = ({ user }) => {

    const navigate = useNavigate();
    function handlePage() {
        navigate('/tasks')
    }

    return (
        <div>
            <h1>Profile</h1>
            <button onClick={handlePage}>Tasks</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}
