import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';
import { Copyright } from '../../components/container/copyright';

export const DashBoard = () => {

    const history = useNavigate();

    const logout = () => {
        history('/login');
    }

    const tasks = () => {
        history('/tasks');
    }

    return (
        <div>
            <div style={{ padding: '10px' }}>
                <Button variant='contained' onClick={tasks}>Task Manager</Button>
            </div>

            <div style={{ padding: '10px' }}>
                <Button variant='contained' onClick={logout}>Logout</Button>
            </div>

            <footer>
                <Copyright />
            </footer>
        </div>
    )
}
