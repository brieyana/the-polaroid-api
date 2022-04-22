import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import Section from '../Section';

import './DocsPage.css';

const DocsPage = () => {
    return (
        <div id="docs-page">
            <Header />
            <div id="body">
                <Sidebar />
                <div className="container">
                    <Section
                        title="Information"
                        text="Esse exercitation pariatur ut excepteur. Nisi non fugiat ipsum nostrud 
                        commodo. Mollit mollit labore voluptate est eiusmod adipisicing.Aliqua laborum 
                        Lorem commodo tempor nisi eu esse dolor adipisicing. Exercitation exercitation 
                        sit do amet magna ad Lorem aliquip exercitation eu. Proident velit nisi laborum 
                        veniam cillum et ex tempor do. Aute aliquip dolore do commodo elit ullamco culpa 
                        proident sint velit ex. Voluptate aute aliqua incididunt ullamco esse sint anim 
                        nulla dolor aute ipsum eu nulla." />
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default DocsPage;