import React from 'react';
import "./Footer.css";
import linkedInLogo from '../img/linkedin-icon.png';
import githubLogo from'../img/github-logo.png';

const Footer=()=>{

    return(
        <footer className="Footer">
            <div className="footer-container1">
                Réalisé par Benoit GRAND avec ReactJs
            </div>
            <div className='footer-container2'>
                <a href='https://www.linkedin.com/in/benoitgrand/' target='_blank'>
                <img src={linkedInLogo} alt='linkedin' className="footer-logo"/>
                </a>
                <a href='https://github.com/bengrand-developer' target='_blank'>
                <img src={githubLogo} alt='github' className="footer-logo"/>
                </a>
            </div>
        </footer>
    )
};

export default Footer;