import React from "react";
import { Link } from 'react-router-dom';
import { 
    List, 
    ListItem, 
    ListItemText, 
    makeStyles 
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: "none",
        fontSize: "20px",
        color: "#FFFFFF"
    },
}));

export default function NavLink({to, key, text, children}) {
    const classes = useStyles();

    return (
        <Link to={to} className={classes.link}>
            <List>
                <ListItem button key={key}>
                    <ListItemText primary={text} />
                </ListItem>
            </List>
        </Link>
    )
}