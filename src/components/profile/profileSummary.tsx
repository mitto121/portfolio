import * as React from 'react';
import { Grid } from '@material-ui/core';

export const ProfileSummary = (props) => {
    return (
        <React.Fragment>
            <Grid item style={{ width: "100%" }}>
                <h3>Full Stack Application Developer | Microsoft .Net Developer</h3>
                <hr />
            </Grid>
            <Grid item style={{ width: "100%" }}>
                <span>{props.careerObjective}</span>
            </Grid>
            <Grid item style={{ width: "100%" }}>
                <h3>Profile Summary</h3>
                <hr />
            </Grid>
            <Grid item style={{ width: "100%" }}>
                <ul>
                    {
                        props.profileSummary.map((data, index) => <li key={index}>{data}</li>)
                    }
                </ul>
            </Grid>
        </React.Fragment>
    )
}