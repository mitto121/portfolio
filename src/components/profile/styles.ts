import styled from '@emotion/styled'
import { Paper, Grid } from '@material-ui/core';
import { css } from '@emotion/core'
export const layoutFill=css`
    height:100%;
    width:100%;
 `;

export const StyleContainer = styled(Grid)`
  padding: 30px;
  background-color: #2a2a2a;
  color:#efefef;
  display:flex;
  overflow:auto;
  ${layoutFill};
  li{
      margin-left:1.5rem;
  }
`;
export const StyleProfileSummary = styled(Grid)`
    padding: 32px;
    background-color: #222525;   
    display:flex;    
    ${layoutFill};
    h2{
        color:#fff;
    };
    h4,span,ul,li{
        color:#fff;
        font-size:0.8rem;
    };
`;

export const StylePictureCard = styled(Paper)`
    width: 80%;
    height: 40%;
    margin:1rem;
    color:#fff;
    padding: 5px;
    cursor:pointer;
    &:hover{
     background-color:#0d0d0d;
    }
    @media (max-width: 599px) {
        width: 80%;
        height: 40%;
   }
`;
 
export const StyleCard = styled(Paper)`
    width: 18rem;
    height: 25rem;
    margin:1rem;
    color:#fff;
    padding: 5px;
    cursor:pointer;
    &:hover{
     background-color:#8ee7f9;
    }
`;
export const StyleImg=styled("img")`
    border-radius: 25px;  
    ${layoutFill}; 
`
export const StyleProjectDetail = styled(Grid)`
    display: block;
    max-width: 100%;
    height: 9rem;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:0.65rem;
    color:#79797c
 `;



