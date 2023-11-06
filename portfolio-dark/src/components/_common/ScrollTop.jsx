import React from 'react';
import { Fade, useScrollTrigger } from '@mui/material';




export default function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({

        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (
            (event.target).ownerDocument || document
        ).querySelector('#root');

        if (anchor) {
            anchor.scrollIntoView({
                block: 'start',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <div
                onClick={handleClick}
                // role="presentation"
                style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000, opacity: 0.8 }}
            >
                {children}
            </div>
        </Fade>
    );
}