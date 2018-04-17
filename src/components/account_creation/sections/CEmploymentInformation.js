import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const floatingLabelStyle = {
	fontWeight: 'normal',
};

export default class CEmploymentInformation extends Component {
	updateForm = (event) => {
		this.props.handleChange('employmentInfo', event);
	};

	render() {
		const thisForm = this.props.employmentInfo;
	  	return (
		  	<Row style={{height: '65vh', overflowX: 'hidden', overflowY: 'auto', margin: 0, padding: '0 20px'}}>
			  	<Col sm={12} md={6}>
				  	<TextField	floatingLabelText='Employers Name'
				  				floatingLabelStyle={floatingLabelStyle} 
				  				fullWidth={true}
				  				defaultValue={thisForm.employerName} 
				  				onChange={this.updateForm}
				  				name='employerName'/>
				    
				    <TextField 	floatingLabelText='Employers Address'
				    			floatingLabelStyle={floatingLabelStyle} 
				    			fullWidth={true}
				    			defaultValue={thisForm.address} 
				    			onChange={this.updateForm}
				    			name='address'/>
				    
				    <TextField 	floatingLabelText='Work Phone'
				    			floatingLabelStyle={floatingLabelStyle} 
				    			fullWidth={true}
				    			defaultValue={thisForm.workPhone} 
				    			onChange={this.updateForm}
				    			name='workPhone'
				    			type='number'/>
				    
				    <TextField 	floatingLabelText='Job Position'
				    			floatingLabelStyle={floatingLabelStyle} 
				    			fullWidth={true}
				    			defaultValue={thisForm.jobPosition} 
				    			onChange={this.updateForm}
				    			name='jobPosition'/>
			    </Col>
		    </Row>);
		}
}