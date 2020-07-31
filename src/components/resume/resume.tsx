import * as React from 'react'
import { StylePage, StyleHeader } from '../style'
import { Grid } from '@material-ui/core'
import styled from '@emotion/styled';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

export const StyleDocument = styled(Document)`
    margin:1rem;
    color:#fff;
    padding: 5px;
    cursor:pointer;
 `;
 export const StyleAnchor = styled('a')`
   color:#7f90e6;
   font-size:1rem;
   padding:0.5rem;
   cursor:pointer;
   text-decoration:none;
   i{
    padding-right:5px;
   }
   &:hover{
    color:#059588; 
   }
 `;
 const  pdfFile = require("../../assets/resume.pdf");
export const Resume = () => {
    const [numPages, setNumPages] = useState(null);
    const [pdf] = useState(pdfFile);
    const onDocumentLoadSuccess=({ numPages }) =>{
        setNumPages(numPages);
    }

    return (
        <StylePage container item xs={12} sm={9} direction="column" justify="flex-start" alignItems="flex-start">
            <Grid container item direction="row" justify="center" alignItems="center">
                <StyleHeader container item direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid container item xs={8} direction="row" justify="flex-start" alignItems="center" >Resume</Grid>
                    <Grid container item xs={4}direction="row"  justify="flex-end" alignItems="center" >
                        <StyleAnchor href={pdfFile}><i className="fas fa-download"></i>Download</StyleAnchor>
                    </Grid>
                </StyleHeader>
                <Grid item>
                    <StyleDocument
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}     
                        loading="Please wait..."                   
                        error={<h1>Resume not found</h1>}>
                        {Array.apply(null, Array(numPages))
                            .map((x, i) => i + 1)
                            .map(page => <Page key={page} pageNumber={page} />)}
                    </StyleDocument>
                </Grid>
            </Grid>
        </StylePage>
    )
}