import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Row, Col } from 'react-bootstrap';

const style = {
  	marginLeft: 20,
};

const selectFieldStyle = {
	width: "100%",
    marginLeft: 20,
};

export default class CAccountInformation extends Component {

	updateForm = (event, index, value) => {
		this.props.handleChange('accountInfo', event);
	};

	updateAccountType = (nameKey, value) => {
		this.props.handleChange('accountInfo', {
			target: {
				value: value,
				name: nameKey,
			}
		});
	};

	render() {
		const thisForm = this.props.accountInfo;
	  	return (
	  	<Row>
		  	<Col sm={12} md={6}>
			  	<SelectField 
			  		defaultValue={thisForm.accType} value={thisForm.accType || 1}
			  		floatingLabelText="Account type"
			  		onChange={(event, index, value, x) => this.updateAccountType('accType', value)}
			  		style={selectFieldStyle} autoWidth={false} underlineStyle={{display:'none'}}>
		        	<MenuItem value={1} primaryText="Savings" />
		        	<MenuItem value={2} primaryText="Deposit" />
        		</SelectField>
			    <Divider />
			    <TextField hintText="Purpose of bank account" style={style} 
			    	underlineShow={false} defaultValue={thisForm.purpose} 
			    	onChange={this.updateForm} name="purpose"/>
			    <Divider />
			    <TextField hintText="Where will the money come from?" style={style} 
			    	underlineShow={false} defaultValue={thisForm.depositSource} 
			    	onChange={this.updateForm} name="depositSource"/>
			    <Divider />
			    <TextField hintText="How did you hear about us?" style={style} 
			    	underlineShow={false} defaultValue={thisForm.infoSource} 
			    	onChange={this.updateForm} name="infoSource"/>
			    <Divider />
		    </Col>
	    </Row>);
	}
}