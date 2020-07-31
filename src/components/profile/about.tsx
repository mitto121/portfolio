import * as React from 'react';
import { StyleProfileSummary, StylePictureCard, StyleImg } from './styles';

export const About = () => {
    return (
        <StyleProfileSummary item xs={12} sm={3}>
            <StylePictureCard elevation={3}>
                <StyleImg src={require("../../assets/images/profile_pic.jpg")} ></StyleImg>
                <h2>Hi, I am Mitto Pal</h2>
                <span>I like building awesome software.
                I`ve built websites and corporate software. If you are interested,
                you can view some of my favorite projects in my portfolio down below.
                    </span>
                <h4>My Personal Interests</h4>
                <span>When I am not coding my next project, I enjoy spending my time doing any of the following:</span>
                <ul>
                    <li>I love cooking.</li>
                    <li>I am watching web series.</li>
                    <li>I learn new skill/programming by watching some online tutorials.</li>
                </ul>
            </StylePictureCard>
        </StyleProfileSummary>
    )
}