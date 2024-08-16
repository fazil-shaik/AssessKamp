import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
// import FloatingScrollbar from './Components/FloatingScrollbar';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            {/* <FloatingScrollbar /> */}
            <Features />
        </div>
    );
};

export default App;
