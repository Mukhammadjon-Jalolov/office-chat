import React, {Component} from "react"
import {Map, GoogleApiWrapper, Marker} from "google-maps-react"
import { BrowserRouter as Router, Route } from "react-router-dom";


import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export default function SendMessage({updateMsg}){
	const [value, setValue] = React.useState('');
	
	const handleChange = (event) => {
		setValue(event.target.value);
	};
	
	const handleEnter = (event) => {
		if(event.key === 'Enter'){
			//console.log(value)
			updateMsg(value)
			setValue("")
			event.preventDefault()
		}
	}
	
	const handleSend = (event) => {
		//console.log(value)
			{value.length ? updateMsg(value) : console.log("please fill your message")}
		
		setValue("")
		event.preventDefault()
	}
	
	return (
		<div className = "SendMessage">
			<TextField
			id="outlined-multiline-flexible"
			
			multiline
			maxRows={4}
			value={value}
			onChange={handleChange}
			onKeyDown={handleEnter}
			/>
			
			{value.length ? <SendIcon color="primary" sx={{ fontSize: 40 }} onClick = {handleSend} /> : null}
			
			
			
		</div>
	)
}