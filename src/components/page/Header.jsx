import React from 'react';
import Curriculum from '../../../public/assets/docs/Rodolfo_Frias_CV.pdf'
import '../../../public/assets/styles/Header.scss';


const Header = () => (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark header">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-dark"></span>
        </button>
        <div className="collapse navbar-collapse float-right" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <a className="nav-item nav-link active" href="#intro">Home<span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link js-scroll-trigger" href="#projects">Proyectos</a>
                <a className="nav-item nav-link js-scroll-trigger" href="mailto:rodofriaslugo@gmail.com">Contácto</a>
                <a className="nav-item nav-link js-scroll-trigger" href={Curriculum} download="RodolfoFriasCV">Curriculum</a>
                {/* <a className="nav-item nav-link js-scroll-trigger" href="#">Curriculum</a> */}
            </div>
        </div>
    </nav >
);

export default Header;