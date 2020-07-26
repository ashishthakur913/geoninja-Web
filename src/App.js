import React from 'react';
import logo from './logo.svg';
import MapContainer from './Map/MapContainer'
import HeaderComponent from './Header/HeaderComponent'
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
                    <HeaderComponent/ >
                    <MapContainer />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
