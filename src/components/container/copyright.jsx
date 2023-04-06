import React from 'react';
import { Link, Typography } from '@mui/material'

export const Copyright = () => {
    return (
        <div>
            <Typography variant='body2' color='GrayText' align='center'>
                {'Copyright© '}
                <Link color='inherit' href='mailto:facuzanata@hotmail.com'>
                    FCDev
                </Link>
                {'  -  '}
                {new Date().getFullYear()}
            </Typography>
        </div>
    )
}
