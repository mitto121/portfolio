import * as React from 'react';
import { ToolBar } from './toolBar';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';
import { UserProfile } from './profile';
import { Resume } from './resume/resume';
import { Blogs } from './blogs/blogs';
import { Certifications } from './certifications/certifications';
import { Contact } from './contact/contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { About } from './profile/about';
import { StylePage } from './style';

export const StyleMainContainer = styled(Grid)`
    padding-top:0.75rem;
    height:100%;
    width:100%;
`;

export const StyleGrid = styled(Grid)`
@media (min-width: 599px) {
 display:none;
}
`;


export default function App() {
  return (
    <StylePage container direction="column">
      <BrowserRouter>
        <ToolBar />
        <StyleMainContainer container direction="row" justify="flex-start" alignItems="flex-start">
          <About />
          <Switch>
            <Route path="/" exact component={UserProfile} />
            <Route path="/portfolio" component={UserProfile} />
            <Route path="/resume" component={Resume} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/certifications" component={Certifications} />
            <Route path="/contact" component={Contact} />
            <Route path="*"  >
              <StylePage container item xs={12} sm={9} direction="row" justify="flex-start" alignItems="flex-start">
                <h2>Page you are requested not found</h2>
              </StylePage>
            </Route>
          </Switch>
        </StyleMainContainer>
      </BrowserRouter>
    </StylePage>
  );
}