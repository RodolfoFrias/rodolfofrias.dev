import React from 'react';
import '../../public/assets/styles/App.scss';

import Header from '../components/page/Header';
import Introduction from '../components/page/Introduction';
import Categories from '../components/page/Categories';
import Projects from '../components/page/Projects';
import Project from '../components/page/Project';
import Contact from '../components/page/Contact';
import Footer from '../components/page/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import useProjects from '../hooks/useInitialState';
const API = 'http://localhost:1337/projects';
const headers = new Headers();
const CONFIG = {
    method: 'GET',
    headers: headers
}


const App = () => {
    const projects = useProjects(API, CONFIG);
    return(
        <div className="app bg-dark">
            <Header/>
            <Introduction/>

            <Categories title="Mis proyectos">
                <Projects>
                    {
                        projects.map(item => 
                            <Project key={item.objectId} {...item}/>
                        )
                    }
                </Projects>
            </Categories>
            

            <Contact/>
            <Footer/>
        </div>
    )
};

export default App;