import React from 'react';
import { useParams } from 'react-router-dom';
import '../../public/assets/styles/ProfileProject.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import NotFound from './NotFound';

import useGetProject from '../hooks/useGetProject';
const headers = new Headers();
const CONFIG = {
    method: 'GET',
    headers: headers
}


const ProfileProject = () => {
    window.scrollTo(0,0);
    const { id } = useParams()
    const API = 'http://localhost:1337/api/v1/projects/'+id;

    const project = useGetProject(API, CONFIG);
  
    const handleGoBack = () => {
        window.history.back();
    }

    return Object.keys(project).length > 0 ? (
        <section className="container-fluid profile">
            <div className="row p-3">
                <div className="pointer" onClick={handleGoBack}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="ml-2">Regresar</span>
                </div>
            </div>
            <div className="row ">
                <div className="col-sm-12 col-lg-4  profile___img">
                    <img src={project.picture.url} alt="" />
                </div>
                <div className="col-sm-12 col-lg-8">
                    <div className="profile-col__content">
                        <h1>{project.name}</h1>
                        <div className="profile-full-description">
                            <p className="text-justify">{project.full_description}</p>
                        </div>
                        <div className="profile-technologies">
                            <span className="font-weight-bold">Tecnologías utilizadas</span>
                            <ul>
                                {
                                    project.technologies?.map(item => 
                                        <li key={item}>{item}</li>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="profile-resources">
                            <span className="font-weight-bold">Recursos</span>
                            <ul>
                                <li> <a href={project.url} target="__blank">Ir a la página</a> </li>
                                <li> <a href={project.repo} target="__blank">Ver en Github</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ): <NotFound/>
};

export default ProfileProject;