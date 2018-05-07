import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

import CPersonalInformation from './sections/CPersonalInformation';
import CEmploymentInformation from './sections/CEmploymentInformation';
import CAccountInformation from './sections/CAccountInformation';
import CDocumentation from './sections/CDocumentation';
import * as formActions from '../../actions/account_creation/AccountCreationActions';

const HomePageBackground = styled.div`
    height: 100vh;
	width: 100vw;
  	background: url('swissflag.jpg') no-repeat center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DockerDiv = styled.div`
	width: 70vw;
	background: aliceblue;
	border-radius: 0px;
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

const dataModel = {
					personalInfo: {
						title: '',
						firstName: '',
						middleName: '',
						lastName: '',
						homePhone: '',
						mobilePhone: '',
						email: '',
						mailingAddress: '',
						ssn: '',
					},
					employmentInfo: {
						employerName: '',
						address: '',
						workPhone: '',
						jobPosition: '',
					},
					accountInfo: {
						accType: 1,
						purpose: '',
						depositSource: '',
						infoSource: '',
					},
					documentation: {
						utilBillCopy: '',
						ssnCopy: '',
					}
				};
const initialFormState = {
	finished: false,
	stepIndex: 0,
	formData: dataModel,
	intervalId: 0
};

export class CAccountCreation extends Component {

	constructor(props) {
		super(props);
		this.state = initialFormState;
	};

	componentDidMount() {
   		var intervalId = setInterval(this.saveDraft, 5000);
   		this.setState({intervalId: intervalId});
   		this.restoreDraft();
	}

	componentWillUnmount() {
   		clearInterval(this.state.intervalId);
	}

	handleFinish = () => {
		if (this.ssnFormRef) this.ssnFormRef.submit();
		if (this.utilFormRef) this.utilFormRef.submit();
		this.props.createAccount(this.state.formData);
		localStorage.clear();
		this.setState(initialFormState);
	};

	utilBillFormRefCallback = (utilFormRef) => {
		this.utilFormRef = utilFormRef;
	};

	ssnFormRefCallback = (ssnFormRef) => {
		this.ssnFormRef = ssnFormRef;
	};

	handleNext = () => {
		const {
			stepIndex
		} = this.state;
		this.setState({
			stepIndex: stepIndex + 1,
			finished: stepIndex >= 2,
		});
		if (stepIndex > 2) this.handleFinish();
	};

	handlePrev = () => {
		const { stepIndex } = this.state;
		if (stepIndex > 0) {
			this.setState({
				stepIndex: stepIndex - 1
			});
		}
	};

	saveDraft = () => {
		const serializedState = JSON.stringify(this.state.formData);
		localStorage.setItem('formDraft', serializedState);
	};

	restoreDraft = () => {
		const formDraft = localStorage.getItem('formDraft');
		// formDraft !== null TODO check
		if (formDraft !== undefined) {
			this.setState({formData: JSON.parse(formDraft)});
		}
	};

	handleChange = (currentForm, event) => {
		this.state.formData[currentForm][event.target.name] = event.target.value;
		this.setState({formData: {...this.state.formData}});
	};

	getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return <CPersonalInformation {...this.state.formData} handleChange={this.handleChange}/>;
			case 1:
				return <CEmploymentInformation {...this.state.formData} handleChange={this.handleChange}/>;
			case 2:
				return <CAccountInformation {...this.state.formData} handleChange={this.handleChange}/>;
			default:
				return <CDocumentation 	{...this.state.formData}
										handleChange={this.handleChange}
										utilBillFormRef={this.utilBillFormRefCallback}
										ssnFormRef={this.ssnFormRefCallback}
										/>;
		}
	}

	render() {
		const { stepIndex } = this.state;

		const contentStyle = {
			margin: '0 16px'
		};

		return (
			<HomePageBackground>
			<BankLogoDiv/>
			<DockerDiv>
				<Row style={{padding: '0 20px'}}>
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
		        <div style={{textAlign: 'right', padding: '20px'}}>
                	<FlatButton
	                  label='Back'
	                  disabled={stepIndex === 0}
	                  onClick={this.handlePrev}
	                  style={{marginRight: 12}}
                	/>
	                <RaisedButton
	                  label={stepIndex === 3 ? 'Finish' : 'Next'}
	                  primary={true}
	                  onClick={this.handleNext}
	                />
	            </div>
            </DockerDiv>
            </HomePageBackground>

        );
	};
}

export default connect(null, formActions)(CAccountCreation);