import React from 'react';

class Sample extends React.Component{
	constructor(){
		super();
			this.state={
				name:"swetha",
				age:"20",
				count:10
			}
	}
	change=()=>{
		this.setState({
			count:this.state.count+1

		})
	}
	// props in class component
	render(){
		return(
			<div style={{textAlign:"center"}}>
				<h2>{this.props.name}</h2>
			</div>
			)
	}
}
export default Sample;