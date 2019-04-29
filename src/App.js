import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import TopNav from './components/TopNav';
import Home from './components/Home'
import Footer from './components/Footer';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {

	constructor(props){
		super(props);
		this.state = {vehicleData: null};
	}

componentDidMount(){
	Axios.get("http://localhost:3001/vehicles")
	.then (res => {
		console.log(res.data);
		this.setState({ vehicleData: res.data });
	})
	.catch(err => console.log(err));
}

render(){    
	return(
		<BrowserRouter>
		<div className="App">
			<TopNav />
			<div className="ContentArea">
			<Route exact path='/' component={Home} />
			</div>
			<Footer />
		</div>
		</BrowserRouter>
	);
}

}

export default App;
