import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
            </div>
            <p> &copy; 2021 pizza.com</p>
        </div>
    );
}

export default Footer;
