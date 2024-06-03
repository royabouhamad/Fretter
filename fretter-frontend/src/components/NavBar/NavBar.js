import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    height: '50px',
    minHeight: '50px',
    backgroundColor: 'rgb(31, 41, 55)'
  },
  rightSection: {
    display: "flex",
    justifyContent: "flex-end",
    gap: theme.spacing(1),
  },
}));

export default function NavBar({ logo, rightSection, children }) {
  const classes = useStyles();

  return (
    // <>
    //     <AppBar position="fixed" className={classes.header}>
    //         <Toolbar style={{justifyContent: "space-between"}}>
    //             <div style={{margin: 'auto'}}>
    //                 <h1 style={{margin: 0}}>{title}</h1>
    //             </div>
    //             {rightSection}
    //         </Toolbar>
    //     </AppBar>
    //     <Drawer
    //         variant="permanent"
    //         className={classes.navbar}
    //     >
    //         <Toolbar />
    //         <Box sx={{ overflow: 'auto' }}>
    //             {children}
    //         </Box>
    //     </Drawer>
    // </>
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {logo}
          <div className={classes.navlinks}>{children}</div>
          <div className={classes.rightSection}>{rightSection}</div>
        </Toolbar>
      </AppBar>
    </>
  );
}
