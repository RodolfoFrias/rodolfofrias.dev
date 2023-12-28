import React from 'react';
import '../../public/assets/styles/app.scss';

import Introduction from '../components/page/Introduction';
import Categories from '../components/page/Categories';
import Projects from '../components/page/Projects';
import Project from '../components/page/Project';
import Loader from '../components/shared/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import useProjects from '../hooks/useInitialState';

const url = process.env.API_URL;
const API = `${url}`;
const headers = new Headers();
const CONFIG = {
  'method': 'GET',
  'headers': headers,
};

const Home = () => {
  const projects = useProjects(API, CONFIG);
  return (
    <>
      <Introduction />
      <Categories title='My projects'>
        {
          projects.length === 0 ?
            <Loader /> : (
              <Projects>
                {
                  projects.map((item) => <Project key={item.id} details={item} />)
                }
              </Projects>
            )
        }
      </Categories>
      {/* <Contact /> */}
    </>
  );
};

export default Home;
