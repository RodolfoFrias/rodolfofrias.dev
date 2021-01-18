import React from 'react';
import '../../../public/assets/styles/Projects.scss';
import Project from './Project';

import useProjects from '../../hooks/useInitialState';
const API = 'http://localhost:1337/projects';
const CONFIG = {
    method: 'GET'
}

const Projects = () => {
    // const projects = useProjects(API, CONFIG);
    return (
        <section className="row shadow my-5" id="projects">
            <div className="col-12">
                <h1 className="text-center">Proyectos</h1>
            </div>
            <div className="col-12">
                <div className="row justify-content-around pb-5 mb-4">
                   <Project/>
                   <Project/>
                   <Project/>
                   <Project/>
                </div>
            </div>

        </section>
    )

};

export default Projects;