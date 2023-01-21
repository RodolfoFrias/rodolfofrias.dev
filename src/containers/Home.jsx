import React from 'react';
import '../../public/assets/styles/app.scss';

import Popper from 'popper.js';
import $ from 'jquery';
import Introduction from '../components/page/Introduction';
import Categories from '../components/page/Categories';
import Projects from '../components/page/Projects';
import Project from '../components/page/Project';
import Contact from '../components/page/Contact';
import Loader from '../components/shared/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import useProjects from '../hooks/useInitialState';

const url = process.env.API_URL;
const API = `${url}/projects`;
const headers = new Headers();
const CONFIG = {
  method: 'GET',
  headers,
};

const Home = () => {
  // TODO set different endpoint
//   const projects = useProjects(API, CONFIG);
  return (
    <>
      <Introduction />
      <p>This page is in maintenance..</p>
      {/* <Categories title='My projects'>
        {
          projects.length === 0 ?
            <Loader /> : (
              <Projects>
                {
                  projects.map((item) => <Project key={item.objectId} {...item} />)
                }
              </Projects>
            )
        }
      </Categories> */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;
