import * as React from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom'
export const SideNav = (props) => {
    const onNavLinkClick = (event) => {
        props.sideNavToggleClickHandler();
    }
    return (
        <nav className={`sidebar ${props.open ? 'open' : ''}`} >
            <header>Mitto Pal</header>
            <ul>
                <li><NavLink to="/portfolio" exact activeClassName="selected" onClick={onNavLinkClick}><i className="fas fa-qrcode"></i>Profile</NavLink></li>
                <li><NavLink to="/resume" activeClassName="selected" onClick={onNavLinkClick}><i className="fas fa-link"></i>Resume</NavLink></li>
                <li><NavLink to="/blogs" activeClassName="selected" onClick={onNavLinkClick}><i className="fas fa-stream"></i>Blogs</NavLink></li>
                <li><NavLink to="/certifications" activeClassName="selected" onClick={onNavLinkClick}><i className="fas fa-sliders-h"></i>Certifications</NavLink></li>
                <li><NavLink to="/contact" activeClassName="selected" onClick={onNavLinkClick}><i className="far fa-envelope"></i>Contact</NavLink></li>
            </ul>
        </nav>
    )
}
