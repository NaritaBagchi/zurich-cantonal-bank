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
    	showDefaultText: false
  	};

  	componentDidMount() {
   		const showTerms = localStorage.getItem('showTermsPage');
		if (showTerms !== null) {
			this.setState({showTermsPage: showTerms});
		}
	}

	handleTermsDismiss = () => {
		this.setState({
			showTermsPage: false,
			showAccountCreationForm: false,
			showDefaultText: true
		});
  	};

  	handleTermsAgree = () => {
    	this.setState({
    		showTermsPage: false,
    		showAccountCreationForm: true,
    		showDefaultText: false
    	});
    	localStorage.setItem('showTermsPage', false);
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
				{this.state.showDefaultText &&
					<h1>Thank you for showing interest!</h1>}
			</HomePageContainer>
		);
	}
}