import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
    return (
        <div className="about">
             <div className="aboutTop" style={{ backgroundImage: `url(${ MultiplePizzas })` }}></div>
             <div class="aboutBottom">
                 <h1> About Us </h1>
                 <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, </p>
             </div>
        </div>
    );
}

export default About;
