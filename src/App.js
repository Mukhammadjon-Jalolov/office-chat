import React, {Component} from "react"
import logo from './logo.svg';
import './App.css';
import {Map, GoogleApiWrapper, Marker} from "google-maps-react"
import { BrowserRouter as Router, Route } from "react-router-dom";

import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";




class App extends Component {

render () {
	
	return (
			<div>
			<Nav />
				<div className = "containter">
					<Route exact = {true} path = "/" component = {Home} />
					<Route path = "/about" component = {About} />
					<Route path = "/contact" component = {Contact} />
				</div>
			</div>
		);
}

}

export default App;

