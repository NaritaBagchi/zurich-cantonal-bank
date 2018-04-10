import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const style = {
  	marginLeft: 20,
};

const personalInfoForm = "personalInfo";

export default class CPersonalInformation extends Component {

	updateForm = (event) => {
		this.props.handleChange('personalInfo', event);
	};

	render() {
		const thisForm = this.props.personalInfo;
		// When the values are passed from parent, the input fields
		// need to have a defaultValue field in place of value field.
	  	return (
	  	<Row>
		  	<Col sm={12} md={6}>
			  	<TextField hintText="Title" style={style} 
			  		underlineShow={false} defaultValue={thisForm.title} 
			  		onChange={this.updateForm} name="title"/>
			    <Divider />
			    <TextField hintText="First name" style={style} 
			    	underlineShow={false} defaultValue={thisForm.firstName} 
			    	onChange={this.updateForm} name="firstName"/>
			    <Divider />
			    <TextField hintText="Middle name" style={style} 
			    	underlineShow={false} defaultValue={thisForm.middleName} 
			    	onChange={this.updateForm} name="middleName"/>
			    <Divider />
			    <TextField hintText="Last name" style={style} 
			    	underlineShow={false} defaultValue={thisForm.lastName} 
			    	onChange={this.updateForm} name="lastName"/>
			    <Divider />
			    <TextField hintText="Home phone" style={style} 
			    	underlineShow={false} defaultValue={thisForm.homePhone} 
			    	onChange={this.updateForm} name="homePhone"/>
			    <Divider />
			    <TextField hintText="Mobile phone" style={style} 
			    	underlineShow={false} defaultValue={thisForm.mobilePhone} 
			    	onChange={this.updateForm} name="mobilePhone"/>
		    	<Divider />
		    </Col>
		    <Col sm={12} md={6}>
			    <TextField hintText="Email address" style={style} 
			    	underlineShow={false} defaultValue={thisForm.email} 
			    	onChange={this.updateForm} name="email"/>
			    <Divider />
			    <TextField hintText="Mailing address" style={style} 
			    	underlineShow={false} defaultValue={thisForm.mailingAddress} 
			    	onChange={this.updateForm} name="mailingAddress"/>
			    <Divider />
			    <TextField hintText="Social Security Number" style={style} 
			    	underlineShow={false} defaultValue={thisForm.ssn} 
			    	onChange={this.updateForm} name="ssn"/>
			    <Divider />
		    </Col>
	    </Row>);
	}
}