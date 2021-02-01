import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <div className="app">
        <div className="stars">
            <Header/>
                {children}
            <Footer/>
        </div>
    </div>
);

export default Layout;