import React from 'react';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-dark"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#home">Home<span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link js-scroll-trigger" href="#projects">Projects</a>
                <a className="nav-item nav-link js-scroll-trigger" href="#aboutme">About me</a>
                <a className="nav-item nav-link js-scroll-trigger" href="#contact">Contact</a>
                <a className="nav-item nav-link js-scroll-trigger" href="#">Curriculum</a>
            </div>
        </div>
    </nav >
);

export default Header;