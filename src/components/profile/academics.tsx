import * as React from 'react';
import { Grid } from '@material-ui/core';

export const Academics = (props) => {
    return (
        <React.Fragment>
            <Grid item style={{ width: "100%" }}>
                <h3>Academics</h3>
                <hr />
            </Grid>
            <Grid item style={{ width: "100%" }}>
                <ul>
                    {
                        props.data.map((academic, index) => <li key={index}>{academic}</li>)
                    }
                </ul>
            </Grid>
        </React.Fragment>
    )
}