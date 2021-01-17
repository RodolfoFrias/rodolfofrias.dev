import React from 'react';
import '../../public/assets/styles/App.scss';

import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
    <div className="app">
        <Header/>
        <Introduction/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
);

export default App;