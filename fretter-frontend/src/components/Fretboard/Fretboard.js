import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        overflow:'hidden',
        position:'relative',
    }
}))

const Fretboard = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    )
}

export default Fretboard;