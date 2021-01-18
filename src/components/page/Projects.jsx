import React from 'react';
import '../../../public/assets/styles/Projects.scss';


const Projects = ({children}) => {
    return (
        <section className="project">
            <div className="project__container">
               {children}
            </div>
        </section>
    )

};

export default Projects;