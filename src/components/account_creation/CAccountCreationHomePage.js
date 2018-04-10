import React, { Component } from 'react';
import styled from 'styled-components';

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

	handleDecline = () => {
		this.setState({showTermsPage: false});
    	this.setState({showDefaultText: true});
  	};

  	handleAgree = () => {
    	this.setState({showTermsPage: false});
    	this.setState({showAccountCreationForm: true});
  	};

	render() {

		return(
			<HomePageContainer>
				{this.state.showTermsPage && 
					<CTermsPage handleAgree={this.handleAgree}
								handleDecline={this.handleDecline}/>}
				{this.state.showAccountCreationForm && <CAccountCreation/>}
				{this.state.showDefaultText && <h1>Thank you for showing interest!</h1>}
			</HomePageContainer>
		);
	}
}