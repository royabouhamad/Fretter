import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: 'beige',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        overflow: 'hidden',
    }
}))

const Root = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {children}
        </div>
    );
}

export default Root;