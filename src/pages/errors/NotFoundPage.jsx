import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {

    const navigate = useNavigate();
    function handleClick() {
        navigate("/");
    }

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <div>
                <button onClick={handleClick}>Home</button>
            </div>
        </div>
    )
}
