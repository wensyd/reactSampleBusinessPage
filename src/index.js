import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './styles.css'



ReactDOM.render(
<Router>
<Navbar/>
<App/>
<Footer/>
</Router>
, 
document.getElementById("root"));
