import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Row, Col } from 'react-bootstrap';

const selectFieldStyle = {
	width: '100%',
};
const floatingLabelStyle = {
	fontWeight: 'normal',
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
	  	<Row style={{height: '65vh', overflowX: 'hidden', overflowY: 'auto', margin: 0,padding: '0 20px'}}>
		  	<Col sm={12} md={6}>
			  	<SelectField 
			  		defaultValue={thisForm.accType}
			  		value={thisForm.accType || 1}
			  		floatingLabelText='Account type'
			  		floatingLabelStyle={floatingLabelStyle}
			  		onChange={(event, index, value) => this.updateAccountType('accType', value)}
			  		fullWidth={true}
			  		autoWidth={false} 
			  		underlineStyle={{display:'none'}}>
			        	<MenuItem value={1} primaryText='Savings' />
			        	<MenuItem value={2} primaryText='Deposit' />
        		</SelectField>
			    <Divider/>
			    <TextField	floatingLabelText='Purpose of bank account'
			    			floatingLabelStyle={floatingLabelStyle}
			    			fullWidth={true}
			    			defaultValue={thisForm.purpose} 
			    			onChange={this.updateForm}
			    			name='purpose'/>
			    
			    <TextField 	floatingLabelText='Where will the money come from?'
			    			floatingLabelStyle={floatingLabelStyle}
			    			fullWidth={true}
			    	 		defaultValue={thisForm.depositSource} 
			    			onChange={this.updateForm}
			    			name='depositSource'/>
			    
			    <TextField 	floatingLabelText='How did you hear about us?' 
			    			floatingLabelStyle={floatingLabelStyle}
			    			fullWidth={true}
			    			defaultValue={thisForm.infoSource} 
			    			onChange={this.updateForm}
			    			name='infoSource'/>
		    </Col>
	    </Row>);
	}
}