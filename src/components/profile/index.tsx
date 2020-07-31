import * as React from 'react';
import { profileData } from '../../services/mockServiceData'
import { StyleContainer } from './styles';
import { Academics } from './academics';
import { Skills } from './skills';
import { ProfileSummary } from './profileSummary';
import { Projects } from './projects';
import { About } from './about';
export const UserProfile = () => {
    const {careerObjective,profileSummary,projects,skills,academics}=profileData;
    return (
        <React.Fragment>           
            <StyleContainer container item xs={12} sm={9} direction="row" justify="flex-start" alignItems="flex-start">
                <ProfileSummary careerObjective={careerObjective} profileSummary={profileSummary}/>              
                <Skills data={skills}/>               
                <Academics data={academics}/>                
                <Projects projects={projects}/>
            </StyleContainer>
        </React.Fragment>
    )
}