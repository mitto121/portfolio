import * as React from 'react';
import { Grid } from '@material-ui/core';
import {  StyleCard, StyleImg,  StyleProjectDetail } from './styles';
export const Projects = (props) => {
    return (
        <React.Fragment>
             <Grid item style={{ width: "100%" }}>
                    <h3>Projects</h3>
                    <hr />
                </Grid>
                {props.projects.map((project, index) => (
                    <Grid item key={index}>
                        <StyleCard elevation={3}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                                <Grid item xs={12}>{project.name}</Grid>
                                <Grid item xs={12}>
                                <StyleImg src={require(`../../assets/images/${project.image||"no_image.png"}`)} ></StyleImg>
                                </Grid>
                                <StyleProjectDetail item xs={12}>{project.discriptions}</StyleProjectDetail>
                            </Grid>
                        </StyleCard>
                    </Grid>
                ))}
        </React.Fragment>
    )
}