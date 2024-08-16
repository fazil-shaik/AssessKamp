import React from 'react';
import Logos from './Logos';

const Hero = () => {
    return (
        <section className="hero">
            <Logos />
            <h1>We've really sped up our workflow</h1>
            <p>Add text here for your main call to action.</p>
            <div className="buttons">
                <button>Start Learning Today</button>
                <button>Join Now</button>
            </div>
        </section>
    );
};

export default Hero;
