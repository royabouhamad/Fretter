import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "calc(100%-180)",
        height: "90%",
        overflowX: "auto",
        overflowY: "auto",
        textAlign: "center",
        justifyContent: "center"
    },
});

export default function Content({ children }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    );
}