import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div class="headerContainer">
                <h1> Pizza </h1>
                <p> Original Italian Pizza </p>
                <Link to="/menu">
                    <button> Order Now </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
