import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { SideNav } from '../sideNav';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles, StyleBackDrop } from './toolBar.Styles';
import { useState } from 'react';

export const ToolBar = () => {
    const [sideNavOpen, setSideNavVisibility] = useState(false);

    const sideNavToggleClickHandler = () => {
        setSideNavVisibility(!sideNavOpen);
    }
    const backDropClickHandler = () => {
        setSideNavVisibility(false);
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={sideNavToggleClickHandler}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Portfolio
          </Typography>
                </Toolbar>
                {sideNavOpen && (
                    <React.Fragment>
                        <SideNav open={sideNavOpen} sideNavToggleClickHandler={sideNavToggleClickHandler} />
                        <StyleBackDrop onClick={backDropClickHandler} />
                    </React.Fragment>
                )}
            </AppBar>
        </div>
    )
}
