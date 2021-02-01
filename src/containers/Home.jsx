import React from 'react';
import '../../public/assets/styles/App.scss';

import Introduction from '../components/page/Introduction';
import Categories from '../components/page/Categories';
import Projects from '../components/page/Projects';
import Project from '../components/page/Project';
import Contact from '../components/page/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import useProjects from '../hooks/useInitialState';
const url = process.env.API_URL;
const API = `${url}/projects`;
const headers = new Headers();
const CONFIG = {
    method: 'GET',
    headers: headers
}

const Home = () => {
    console.log(process.env.API_URL)
    const projects = useProjects(API, CONFIG);
    return (
        <>
            <Introduction />
                <Categories title="Mis proyectos">
                    {
                        projects.length === 0 ? <p>No hay proyectos disponibles</p> :
                            <Projects>
                                {
                                    projects.map(item =>
                                        <Project key={item.objectId} {...item} />
                                    )
                                }
                            </Projects>
                    }
                </Categories>
            {/* <Contact /> */}
        </>
    )
};

export default Home;