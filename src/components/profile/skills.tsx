import * as React from 'react';
import { Grid } from '@material-ui/core';

export const Skills = (props) => {
    return (
        <React.Fragment>
            <Grid item style={{ width: "100%" }}>
                <h3>Skills Highlights</h3>
                <hr />
            </Grid>
            <Grid item style={{ width: "100%" }}>
                <ul>
                    {
                        props.data.map((skill, index) => <li key={index}>{skill}</li>)
                    }
                </ul>
            </Grid>
        </React.Fragment>
    )
}