import * as React from 'react';
import { StylePage, StyleHeader } from '../style';
import './contact.css';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';

const StyleContainer = styled(Grid)` 
    padding: 12px; 
    border: 1px solid #ccc; 
    border-radius: 4px;
    box-sizing: border-box; 
    margin-top: 6px;
    margin-bottom: 16px; 
    resize: vertical 
  `
  const StylePara = styled('div')` 
      text-align:center 
   `
const StyleGrid = styled(Grid)` 
      padding-top:40px;
  `
export const Contact = () => {
    return (
        <StylePage container item xs={12} sm={9} direction="column" justify="flex-start" alignItems="flex-start">
            <Grid container item direction="row" justify="center" alignItems="center">
                <StyleHeader item>Contact</StyleHeader>
                <StyleGrid item >  <StylePara>Need anything build, want to work together or</StylePara>
                    <StylePara> simply want to chat? Drop me an e-mail at mitto121@gmail.com or</StylePara>
                    <StylePara>simply fill out the form below and I will reply to you soon!</StylePara>
                </StyleGrid> 
            </Grid>
            <StyleGrid container style={{paddingTop:"30px"}}item direction="column" justify="center" alignItems="center">     
                <StyleContainer item>
                    <input type="text" className="form-control" placeholder="Name" />
                    <input type="text" className="form-control" placeholder="Email address" />
                    <textarea placeholder="Your message"  className="form-control" rows={5} cols={25}></textarea>
                    <input type="button" className="form-button" value="Send" />
                </StyleContainer>
            </StyleGrid>
        </StylePage>
    )
}