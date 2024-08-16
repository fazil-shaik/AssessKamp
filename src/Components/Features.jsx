import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Features = () => {
    const ref = useRef(null);
    const { inView, entry } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (entry) {
            entry.target.classList.add('visible');
        }
    }, [inView, entry]);

    return (
        <section className="features">
            <div ref={ref} className="feature-text">
                <h2>Real time changes</h2>
                <p>See changes as they happen...</p>
            </div>
            {/* Add more feature blocks as needed */}
        </section>
    );
};

export default Features;
