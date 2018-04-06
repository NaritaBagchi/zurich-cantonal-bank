import React, { Component } from 'react';
import styled from 'styled-components';
// import { Container, Row, Col } from 'react-bootstrap';

import { termsText } from '../resources/termstext'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField  from 'material-ui/TextField';

const HomePageContainer = styled.div`
    height: 100vh;
	width: 100vw;
	background: url('swissflag	.jpg') no-repeat center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DockerDiv = styled.div`
	
	height: 10vh;
	width: 10vw;
	background: transparent;
	border-radius: 0px;

`;

export default class CHomePage extends Component {
	state = {
    	open: true,
  	};

	handleOpen = () => {
    	this.setState({open: true});
  	};

  	handleClose = () => {
    	this.setState({open: false});
  	};

	render() {
		const actions = [
      		<FlatButton
        		label="Decline"
        		onClick={this.handleClose}
      		/>,
	      	<FlatButton
	        	label="Agree"
	        	primary={true}
	        	onClick={this.handleClose}
	      	/>,
    	];

		return(
			<HomePageContainer>
				<RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
				<Dialog title="Terms and Conditions"
          			actions={actions}
          			modal={true}
          			open={this.state.open}
          			autoScrollBodyContent={true}
        		>
        			<div>
    					{termsText.text}
    				</div>
        		</Dialog>
			</HomePageContainer>
		);
	};
}