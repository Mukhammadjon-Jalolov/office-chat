import React, {Component} from "react"
import '../../app.scss';
import {Map, GoogleApiWrapper, Marker} from "google-maps-react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Rasm from "../../components/Rasm"
import TakePhoto from "../../components/TakePhoto"

import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import SendMessage from "../../components/SendMessage";

//https://www.w3schools.com/js/js_callback.asp


function OnlinePerson(props){
	
	hoverChat = () => {
		
	}
	
	hoverChatExit = () => {
		
	}
	
	return (
			<li key = {props} className = "onlinePerson" onMouseEnter = {hoverChat} onMouseLeave = {hoverChatExit} >
				<p> {props.item.name} is online </p>
			</li>
		)
}

function InteractionsComponent(props){
	return (
		<li key = {props} className = "onlineInteraction" >
			<p> {props.item.sender} --> {props.item.receiver}</p>
		</li>
	)
}

function hoverChatPerson(props){
	return (
		<div className = "chatCard">
			<p> props.user.name </p>
			
		</div>
	)
}

class Home extends Component {
	
constructor(props){
	super(props);
	this.state = {
		messages: [],
		peoplesList: [ {isOnline: true, name: "Shaxnoza", isSending: true, isFriend: true}, {isOnline: true, name: "Dildora", isSending: true, isFriend: true}, 
		{isOnline: true, name: "Oydin", isSending: true, isFriend: true} ],
		newmessage: {sentId: "", name: "Shaxnoza", message: "Hello how are you today?", emoji: [], media: []},
		interactions: [{sender: "Shaxnoza", receiver: "Oydin"}, {sender: "Dildora", receiver: "Shaxnoza"}]
	}
}


componentDidMount(){
	
}

updateMessages = (msg) => {
	console.log(msg)
	var sana = new Date();
	var newMessage = {yuboruvchi: "Men", xabar: msg, soat: sana.getHours(), minut: sana.getMinutes(), millisekundlar: sana.getTime(), kimga: "Malika"}
	let tempArr = JSON.parse(JSON.stringify(this.state.messages))
	tempArr.push(newMessage)
	this.setState({messages: tempArr})
	console.log(tempArr)
}



render(){
	
	const messagesList = this.state.messages.map((result) => (
		<li key = {result.vaqt} style = {{listStyleType: "none"}}>
			<p> {result.yuboruvchi}: {result.xabar} {result.soat.length == 1 ? result.soat : "0" + result.soat} : {result.minut} </p>
		</li>
	));
	
	const isOnlineArray = this.state.peoplesList.filter((item) => {
		if (item.isOnline == true){
			return item;
		}
	});
	
	const onlinePeoplesList = isOnlineArray.map((item) => (
		<OnlinePerson item = {item} />
	));
	
	const interactionsElement = this.state.interactions.map((item) => (
		<InteractionsComponent item = {item} />
	))
	
	return(
		<div className = "App">
		
			<div className = "OpenChat">
				<p> This is OpenChat part on the left </p>
				<h3> Here you can show online people who is communicating </h3>
				<div className = "aroundList">
					{interactionsElement}
				</div>
			</div>
			
			<div className = "Messaging">
				<p> This part is messaging part. Here you chat with your friend </p>
				
				<SendMessage updateMsg = {this.updateMessages}/>
				<p> {messagesList} </p>
				
			</div>
			
			<div className = "WhoIsOnline">
				<p> This is Who is Online part on the right. Here you see who is online </p>
				<div className = "aroundList">
					{onlinePeoplesList}
				</div>
			</div>
			
		</div>
	)
	
}

}

export default Home;

