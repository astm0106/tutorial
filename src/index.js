import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import './index.css';
import Sample1 from './Sample1'
import Game from './tutorial'

// メイン処理========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/sample1">sample1</Link>
                        </li>
                        <li>
                            <Link to="/tutorial">tutorial</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route path="/sample1" element={<Sample1 />}/>
                        <Route path="/tutorial" element={<Game />}/>
                    </Routes>
                </nav>
            </div>
        </Router>
    </div>
);
