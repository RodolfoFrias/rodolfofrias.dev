import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/assets/styles/ProjectItem.scss'

const Project = ({ objectId, name, description, picture, url }) => {

    return (
        <div className="project-item">
            <Link to={`/${objectId}`}>
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
            </Link>
        </div>
    )
};

export default Project;