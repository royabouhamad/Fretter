import React from "react";
import { MenuItem, Select, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        minWidth: 100,
        backgroundColor: '#FFFFFF',
        marginLeft: '-120px',
        textAlign: 'center',
    }
}));

const Dropdown = ({ value, setValue, options, labelFormatter, ...rest }) => {
    const classes = useStyles();

    return (
        <Select
            value={value}
            onChange={setValue}
            className={classes.root}
            {...rest}
        >
            {options.map((option) => {
                return (
                    <MenuItem key={option.id} value={option.id}>
                        {labelFormatter ? labelFormatter(option) : option.name}
                    </MenuItem>
                );
            })}
        </Select>
    );
}

export default Dropdown;