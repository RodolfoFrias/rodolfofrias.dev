/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../public/assets/styles/ProjectItem.scss';

const Project = ({ id, name, description, image_url }) => {

  return (
    <div className='project-item'>
      <Link to={`/project/${id}`}>
        <img className='project-item__img' src={image_url} alt={name} />
        <div className='project-item__details'>
          <p className='project-item__details--title'>{name}</p>
          <p className='project-item__details--subtitle'>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Project;
