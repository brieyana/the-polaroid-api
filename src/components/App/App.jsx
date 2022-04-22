import React from 'react';
import './reset.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import LandingPage from '../LandingPage'
import DocsPage from '../DocsPage/DocsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/docs" element={<DocsPage />} />
            </Routes>
        </Router>
    );
}

export default App;