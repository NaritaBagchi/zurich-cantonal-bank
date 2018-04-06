import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
//import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import CPersonalInformation from './CPersonalInformation';
import CEmploymentInformation from './CEmploymentInformation';
import CAccountInformation from './CAccountInformation';
import CDocumentation from './CDocumentation';

const HomePageContainer = styled.div`
    height: 100vh;
	width: 100vw;
  	background: url('swissflag.jpg') no-repeat center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DockerDiv = styled.div`
	height: auto;
	width: 80vw;
	background: aliceblue;
	border-radius: 0px;
	padding: 20px;
`;

const BankLogoDiv = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	height: 10vh;
	width: 12vw;
	background: url('bank-logo.jpg') no-repeat center center;
	background-size: cover;
`;

export default class CAccountCreation extends Component {
	state = {
		finished: false,
		stepIndex: 0,
	};

	handleNext = () => {
		const {
			stepIndex
		} = this.state;
		this.setState({
			stepIndex: stepIndex + 1,
			finished: stepIndex >= 2,
		});
	}

	handlePrev = () => {
		const { stepIndex } = this.state;
		if (stepIndex > 0) {
			this.setState({
				stepIndex: stepIndex - 1
			});
		}
	}

	getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <CPersonalInformation/>;
			case 1:
				return <CEmploymentInformation/>;
			case 2:
				return <CAccountInformation/>;
			default:
				return <CDocumentation/>;
		}
	}

	render() {
		const { finished, stepIndex } = this.state;

		const contentStyle = {
			margin: '0 16px'
		};

		return (
			<HomePageContainer>
			<BankLogoDiv/>
			<DockerDiv>
				<Row>
					<Col sm={12} md={12}>
				        <Stepper activeStep={stepIndex}>
				          <Step>
				            <StepLabel>Personal Information</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Employment Information</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Account Information</StepLabel>
				          </Step>
				          <Step>
				            <StepLabel>Documentation</StepLabel>
				          </Step>
				        </Stepper>
			        </Col>
		        </Row>
		        {this.getStepContent(stepIndex)}
		        <Row style={{marginTop: 12, textAlign: 'right'}}>
	                <Col sm={12} md={12}>
	                	<FlatButton
		                  label="Back"
		                  disabled={stepIndex === 0}
		                  onClick={this.handlePrev}
		                  style={{marginRight: 12}}
	                	/>
		                <RaisedButton
		                  label={stepIndex === 3 ? 'Finish' : 'Next'}
		                  primary={true}
		                  onClick={this.handleNext}
		                />
	                </Col>
	            </Row>
            </DockerDiv>
            </HomePageContainer>

        );
	};


}