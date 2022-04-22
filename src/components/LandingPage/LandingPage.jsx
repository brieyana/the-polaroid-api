import React from 'react';
import './LandingPage.css'
import Header from './Header'
import Section from '../Section'

const LandingPage = () => {
    return (
        <div id="landing-page">
            <Header />
            <div id="body">
                <Section
                    title="About"
                    text="Esse exercitation pariatur ut excepteur. Nisi non fugiat ipsum nostrud 
                commodo. Mollit mollit labore voluptate est eiusmod adipisicing.Aliqua laborum 
                Lorem commodo tempor nisi eu esse dolor adipisicing. Exercitation exercitation 
                sit do amet magna ad Lorem aliquip exercitation eu. Proident velit nisi laborum 
                veniam cillum et ex tempor do. Aute aliquip dolore do commodo elit ullamco culpa 
                proident sint velit ex. Voluptate aute aliqua incididunt ullamco esse sint anim 
                nulla dolor aute ipsum eu nulla."
                />
                <Section
                    title="Data Collection"
                    text="Esse exercitation pariatur ut excepteur. Nisi non fugiat ipsum nostrud 
                commodo. Mollit mollit labore voluptate est eiusmod adipisicing.Aliqua laborum 
                Lorem commodo tempor nisi eu esse dolor adipisicing. Exercitation exercitation 
                sit do amet magna ad Lorem aliquip exercitation eu. Proident velit nisi laborum 
                veniam cillum et ex tempor do. Aute aliquip dolore do commodo elit ullamco culpa 
                proident sint velit ex. Voluptate aute aliqua incididunt ullamco esse sint anim 
                nulla dolor aute ipsum eu nulla."
                />
                <Section
                    title="Licensing"
                    text="Esse exercitation pariatur ut excepteur. Nisi non fugiat ipsum nostrud 
                commodo. Mollit mollit labore voluptate est eiusmod adipisicing.Aliqua laborum 
                Lorem commodo tempor nisi eu esse dolor adipisicing. Exercitation exercitation 
                sit do amet magna ad Lorem aliquip exercitation eu. Proident velit nisi laborum 
                veniam cillum et ex tempor do. Aute aliquip dolore do commodo elit ullamco culpa 
                proident sint velit ex. Voluptate aute aliqua incididunt ullamco esse sint anim 
                nulla dolor aute ipsum eu nulla."
                />
            </div>
        </div>
    );
}

export default LandingPage;