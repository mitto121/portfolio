import { makeStyles, Theme, createStyles } from "@material-ui/core";
import styled from "@emotion/styled";

export const StyleBackDrop=styled('div')`
    position: fixed;    
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.7);
    z-index: 100;
`
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        height:"100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
  })
);