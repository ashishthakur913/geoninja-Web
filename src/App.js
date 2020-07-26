import React from 'react';
import logo from './logo.svg';
import MapComponent from './Map/MapComponent'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MapComponent />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
