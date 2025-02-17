
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navi = useNavigate();

    return (
        <header className="main-header">
            <h1>Jake Hyunoh Kwon</h1>
            <h3>San Francisco, CA</h3>

            <nav className="main-nav">
                <button onClick={() => navi("/")} className="main-header-btn">Home</button>
                <button onClick={() => navi("/career")} className="main-header-btn">Career</button>
                <button onClick={() => navi("/education")} className="main-header-btn">Education</button>
                <button onClick={() => navi("/project")} className="main-header-btn">Projects</button>
                <button onClick={() => navi("/study")} className="main-header-btn">Study</button>
                <button onClick={() => navi("/certificate")} className="main-header-btn">Certificate</button>
            </nav>
        </header>
    );
}

export default Header;
