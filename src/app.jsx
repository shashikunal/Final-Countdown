import React, { Component } from 'react';
import Clock from './clock'
import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadline:'December 25, 2017',
			newDeadline : ''
		}

	}
   changeDeadline(){
  	this.setState({deadline:this.state.newDeadline});
    }	

	render() {
	return (
		<div className='app'> 
		<div className='app-title'>Countdown to {this.state.deadline}</div>
		<Clock  deadline= {this.state.deadline}/>
		<div className='form-group'>
			<input className='form-control' placeholder='New CountDown' 
			onChange={event => this.setState({newDeadline:event.target.value})}
			/>
			<button className='btn btn-success' onClick={()=>this.changeDeadline()}>submit</button>
		</div>
		</div>






		)
	
	}
}
export default App;