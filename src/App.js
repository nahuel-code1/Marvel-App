import React from 'react';
import "./App.css"
import { HashRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";

export default function App() {

    return ( 
        <Router>
            <Routes />
        </Router>
    )
}