import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import uuidv1 from 'uuid/v1';
import { toast } from 'react-toastify';
import update from 'immutability-helper';

const style = {
  	marginLeft: 20,
};

const containerFieldFlatButton = {
	display: "flex",
};

const floatingLabelStyle = {
	fontWeight: "normal",
};

const DateTimeFormat = global.Intl.DateTimeFormat;

export default class CInvoiceForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	formData: {
				iNumber: 0,
				iDate: new Date(),
				amount: 0,
				dueDate: new Date(),
				customerNumber: 0,
				customerCounty: '',
				iLineItems: '',
				invoiceCopy: '',
				status: 'Pending',
			},
			errorTexts: {
				iNumber: '',
				iDate: '',
				amount: '',
				dueDate: '',
				customerNumber: '',
				customerCounty: '',
				iLineItems: '',
				invoiceCopy: '',
			}
	    };
	}

	onChange = (event) => {
		this.setState(update(this.state, {
			formData: {[event.target.name]: {$set: event.target.value}}
		}));
	};

	onBlurValidation = (event) => {	
		if (event.target.value.toString().trim().length < 1) {
			this.setState(update(this.state, {
				errorTexts: {[event.target.name]: {$set: "Invalid input"}}
			}));
	    } else {
			this.setState(update(this.state, {
				errorTexts: {[event.target.name]: {$set: ""}}
			}));
	    }
	};

	onDateChange = (newDate, targetName) => {
	    this.onChange({target: {name: targetName, value: newDate}});
	};

	validateForm = () => {
		for (var field in this.state.formData) {
			if (this.state.formData[field].toString().trim().length < 1) {
				return false;
			}
		}
		return true;
	};

	submitInvoice = () => {
		if (this.validateForm()) {
			const invoiceData = {...{id: uuidv1()}, ...this.state};
			this.props.postInvoice(invoiceData);
			this.refs.fileUploadForm.submit();
		} else {
			toast.error("Please fill all the fields");
		}
	};

	render() {
		return(
			<div style={{padding: "20px"}}>
				<Row style={{height: "70vh"}}>
				  	<Col sm={12} md={6}>
					  	<TextField style={style} floatingLabelStyle={floatingLabelStyle}
					  		floatingLabelText="Invoice number" 
					  		type="number" underlineShow={true} name="iNumber"
					    	fullWidth={true} onChange={this.onChange}
					    	errorText={this.state.errorTexts.iNumber}
					    	onBlur={this.onBlurValidation}
					    />
					    
					    <DatePicker style={style} floatingLabelStyle={floatingLabelStyle}
					    	floatingLabelText="Invoice date" fullWidth={true}
					    	underlineShow={true}
					    	formatDate={new DateTimeFormat('en-US', {
									        day: 'numeric',
									        month: 'long',
									        year: 'numeric',
									      }).format}
					    	onChange={(noEvent, value) => this.onDateChange(value, 'iDate')}
					    	onBlur={this.onBlurValidation}
					    />
					    
					    <TextField style={style} floatingLabelStyle={floatingLabelStyle}
					    	floatingLabelText="Invoice amount"
					    	type="number" underlineShow={true} name="amount"
					    	fullWidth={true} onChange={this.onChange}
					    	errorText= {this.state.errorTexts.amount}
					    	onBlur={this.onBlurValidation}
					    />
					    
					    <DatePicker style={style} floatingLabelStyle={floatingLabelStyle}
					    	floatingLabelText="Invoice due date" fullWidth={true}
					    	underlineShow={true}
					    	formatDate={new DateTimeFormat('en-US', {
									        day: 'numeric',
									        month: 'long',
									        year: 'numeric',
									      }).format}
					    	onChange={(noEvent, value) => this.onDateChange(value, 'dueDate')}
					    	onBlur={this.onBlurValidation}
					    />
					    
					</Col>
					<Col sm={12} md={6}>
					    <TextField style={style} floatingLabelStyle={floatingLabelStyle}
					    	floatingLabelText="Customer number"
					    	type="number" underlineShow={true} name="customerNumber"
					    	fullWidth={true} onChange={this.onChange}
					    	errorText= {this.state.errorTexts.customerNumber}
					    	onBlur={this.onBlurValidation}
					    />
					    
					    <TextField style={style} floatingLabelStyle={floatingLabelStyle}
					    	floatingLabelText="Customer country" fullWidth={true}
					    	underlineShow={true} name="customerCounty"
					    	onChange={this.onChange}
					    	errorText= {this.state.errorTexts.customerCounty}
					    	onBlur={this.onBlurValidation}
					    />
					    
					    <TextField style={style} floatingLabelStyle={floatingLabelStyle}
					    	floatingLabelText="Invoice line items" fullWidth={true}
					    	underlineShow={true} name="iLineItems"
					    	onChange={this.onChange}
					    	errorText= {this.state.errorTexts.iLineItems}
					    	onBlur={this.onBlurValidation}
					    />
					    
					    <div style={containerFieldFlatButton}>
						  	<TextField style={style} floatingLabelStyle={floatingLabelStyle}
						  		floatingLabelText="Upload invoice copy"
						  		underlineShow={true} name="invoiceCopy" fullWidth={true}>
						  	</TextField>
						  	<form action="http://localhost:3001/fileupload" ref="fileUploadForm"
			    					method="post" encType="multipart/form-data" target="fileUploadTarget">
			    				<FlatButton containerElement='label' style={{width: 'auto'}}>
			    					<i className="material-icons">add_circle</i>
									<input style={{display: 'none'}} type="file" name="filetoupload"/>
									<iframe name="fileUploadTarget"></iframe>
								</FlatButton>
							</form>
					  	</div>
					  	
				  	</Col>
			  	</Row>
			  	<div style={{textAlign: 'right'}}>
	                <FlatButton
	                  	label="Submit"
	                  	variant="raised"
	                  	primary={true}
						onClick={this.submitInvoice}
	                />
			    </div>
		    </div>
		);
	}
}