import React from 'react';
import '../../public/assets/styles/App.scss';

import Header from '../components/page/Header';
import Introduction from '../components/page/Introduction';
import Projects from '../components/page/Projects';
import Contact from '../components/page/Contact';
import Footer from '../components/page/Footer';


import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => (
    <div className="app bg-dark">
        <Header/>
        <Introduction/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
);

export default App;