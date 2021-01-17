import React from 'react';
import '../../public/assets/styles/Projects.scss';
// const image = require('../../public/assets/img/foto.png');

const Projects = () => (
    <section className="row justify-content-around shadow my-5" id="projects">

        <div className="col-12 col-md-5 item my-4">
            <div className="row text-center">
                <div className="col-12">
                    <h4>Hola</h4>
                    <hr />
                </div>
                <div className="col-12">
                    <a href="" target="_blank">
                        <img className="img-thumbnail" src='/public/assets/img/foto.png'  alt="" />
                    </a>
                </div>
            </div>
            <div className="row p-3">
                <p className="text-justify">
                    Hola
                </p>
            </div>
        </div>

    </section>
);

export default Projects;