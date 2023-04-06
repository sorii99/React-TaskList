import React from 'react';
import { useNavigate } from 'react-router-dom';

export const AboutPage = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <div>
            <h1>About | FAQs Page</h1>
            <div>
                <button onClick={handleClick}>Home</button>
                <button onClick={() => navigate(-1)}>Back</button>
                <button onClick={() => navigate(1)}>Next</button>
            </div>
        </div>
    )
}
