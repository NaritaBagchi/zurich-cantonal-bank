import React, { Component } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import CTermsPage from './CTermsPage';
import CAccountCreation from './CAccountCreation';

const HomePageContainer = styled.div`
    height: 100vh;
	width: 100vw;
	background: url('swissflag.jpg') no-repeat center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default class CAccountCreationHomePage extends Component {
	state = {
    	showTermsPage: true,
    	showAccountCreationForm: false,
    	showDefaultText: false,
  	};

	handleTermsDismiss = () => {
		this.setState({showTermsPage: false});
		this.setState({showAccountCreationForm: false});
    	this.setState({showDefaultText: true});
  	};

  	handleTermsAgree = () => {
    	this.setState({showTermsPage: false});
    	this.setState({showAccountCreationForm: true});
    	this.setState({showDefaultText: false});
  	};

	render() {

		return(
			<HomePageContainer>
			<ToastContainer />
				{this.state.showTermsPage && 
					<CTermsPage handleAgree={this.handleTermsAgree}
								handleDecline={this.handleTermsDismiss}/>}
				{this.state.showAccountCreationForm && 
					<CAccountCreation/>}
				{this.state.showDefaultText && <h1>Thank you for showing interest!</h1>}
			</HomePageContainer>
		);
	}
}