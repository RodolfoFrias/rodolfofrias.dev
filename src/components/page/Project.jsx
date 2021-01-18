import React from 'react';
import '../../../public/assets/styles/ProjectItem.scss'

const Project = ({ name, description, picture, url }) => {
    console.log('Entra a Project', name)
    return (
        <div className="project-item">
            <img className="project-item__img" src={picture.url} alt={name} />
            <div className="project-item__details">
                <div>
                    {/* <img className="project-item__details--img" src="" alt="Play Icon" />
                    <img className="project-item__details--img" src="" alt="Plus Icon" /> */}
                </div>
                <p className="project-item__details--title">{name}</p>
                <p className="project-item__details--subtitle">
                    {description}
                </p>
            </div>
        </div>
    )
};

export default Project;