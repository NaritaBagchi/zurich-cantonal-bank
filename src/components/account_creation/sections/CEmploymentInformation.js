import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const style = {
  	marginLeft: 20,
};

export default class CEmploymentInformation extends Component {
	updateForm = (event) => {
		this.props.handleChange('employmentInfo', event);
	};

	render() {
		const thisForm = this.props.employmentInfo;
	  	return (
		  	<Row>
			  	<Col sm={12} md={6}>
				  	<TextField hintText="Employers Name" style={style} 
				  		underlineShow={false} defaultValue={thisForm.employerName} 
				  		onChange={this.updateForm} name="employerName"/>
				    <Divider />
				    <TextField hintText="Employers Address" style={style} 
				    	underlineShow={false} defaultValue={thisForm.address} 
				    	onChange={this.updateForm} name="address"/>
				    <Divider />
				    <TextField hintText="Work Phone" style={style} 
				    	underlineShow={false} defaultValue={thisForm.workPhone} 
				    	onChange={this.updateForm} name="workPhone"/>
				    <Divider />
				    <TextField hintText="Job Position" style={style} 
				    	underlineShow={false} defaultValue={thisForm.jobPosition} 
				    	onChange={this.updateForm} name="jobPosition"/>
				    <Divider />
			    </Col>
		    </Row>);
		}
}