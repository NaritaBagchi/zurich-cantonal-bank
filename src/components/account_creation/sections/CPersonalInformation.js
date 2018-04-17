import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const floatingLabelStyle = {
	fontWeight: 'normal',
};

const personalInfoForm = 'personalInfo';

export default class CPersonalInformation extends Component {

	updateForm = (event) => {
		this.props.handleChange('personalInfo', event);
	};

	render() {
		const thisForm = this.props.personalInfo;
		// When the values are passed from parent, the input fields
		// need to have a defaultValue field in place of value field.
	  	return (
	  	<Row style={{height: '65vh', overflowX: 'hidden', overflowY: 'auto', margin: 0, padding: '0 20px'}}>
		  	<Col sm={12} md={6}>
			  	<TextField	floatingLabelText='Title'
			  				floatingLabelStyle={floatingLabelStyle} 
			  				fullWidth={true}
			  				defaultValue={thisForm.title} 
			  				onChange={this.updateForm}
			  				name='title'/>
			    
			    <TextField 	floatingLabelText='First name' 
			    			floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.firstName} 
			    			onChange={this.updateForm}
			    			name='firstName'/>
			    
			    <TextField 	floatingLabelText='Middle name'
			    			floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.middleName} 
			    			onChange={this.updateForm}
			    			name='middleName'/>
			    
			    <TextField 	floatingLabelText='Last name'
			    			floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.lastName} 
			    			onChange={this.updateForm}
			    			name='lastName'/>
			    
				<TextField 	floatingLabelText='Home phone'
							floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.homePhone} 
			    			onChange={this.updateForm}
			    			name='homePhone'
			    			type='number'/>
		    </Col>
		    <Col sm={12} md={6}>
			    <TextField 	floatingLabelText='Mobile phone'
			    			floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.mobilePhone} 
			    			onChange={this.updateForm}
			    			name='mobilePhone'
			    			type='number'/>

			    <TextField 	floatingLabelText='Email address'
			    			floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.email} 
			    			onChange={this.updateForm}
			    			name='email'/>
			    
			    <TextField 	floatingLabelText='Mailing address'
			    			floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.mailingAddress} 
			    			onChange={this.updateForm}
			    			name='mailingAddress'/>
			    
			    <TextField 	floatingLabelText='Social Security Number'
			    			floatingLabelStyle={floatingLabelStyle} 
			    			fullWidth={true}
			    			defaultValue={thisForm.ssn} 
			    			onChange={this.updateForm}
			    			name='ssn'
			    			type='number'/>
		    </Col>
	    </Row>);
	}
}