import * as React from 'react'
import { StylePage, StyleHeader } from '../style'
import { Grid } from '@material-ui/core';
import { useState } from 'react';
import styled from '@emotion/styled';
import { Document, Page } from 'react-pdf';
export const StyleDocument = styled(Document)`
    margin:1rem;
    color:#fff;
    padding: 5px;
    cursor:pointer;
    canvas{
      width:20rem !important;
      height:20rem !important;
    }
 `;
const data = [{ file: require("../../assets/Kibana_Fundamentals_Certificate.pdf") }];
export const Certifications = () => {
    const [numPages, setNumPages] = useState(null);
    const [pdfFiles] = useState(data);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <StylePage container item xs={12} sm={9} direction="column" justify="flex-start" alignItems="flex-start">
            <StyleHeader item>Certifications</StyleHeader>
            <Grid container item direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item  >
                    {pdfFiles.map((pdf, index) => {
                        return (<StyleDocument key={index}
                            file={pdf.file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading="Please wait..."
                            error={<h1>Certifictes not found</h1>}>
                            {Array.apply(null, Array(numPages))
                                .map((x, i) => i + 1)
                                .map(page => <Page key={page} pageNumber={page} />)}
                        </StyleDocument>)
                    })}
                </Grid>
            </Grid>
        </StylePage>
    )
}