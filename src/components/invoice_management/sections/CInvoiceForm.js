import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import uuidv1 from 'uuid/v1';
import { toast } from 'react-toastify';
import update from 'immutability-helper';

import { ERROR_MESSAGE } from '../../../Constants';
import { compareActiveFormState } from '../../../utils/Utility';

const floatingLabelStyle = {
	fontWeight: 'normal',
};

const DateTimeFormat = global.Intl.DateTimeFormat;

export default class CInvoiceForm extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    	formData: {
				iNumber: props.activeForm.iNumber,
				iDate: props.activeForm.iDate,
				amount: props.activeForm.amount,
				dueDate: props.activeForm.dueDate,
				customerNumber: props.activeForm.customerNumber,
				customerCounty: props.activeForm.customerCounty,
				iLineItems: props.activeForm.iLineItems,
				invoiceCopy: props.activeForm.invoiceCopy,
				status: props.activeForm.status,
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
			},
			editMode: props.editMode
	    };
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (compareActiveFormState(nextProps.activeForm, prevState.formData)) {
			return null;
		}
		const updatedState = update(prevState, {
	        formData: {$set: nextProps.activeForm},
	        editMode: {$set: nextProps.editMode}
	    });
		return updatedState;
	}

	onChange = (event) => {
		this.setState(update(this.state, {
			formData: {[event.target.name]: {$set: event.target.value}}
		}));
	};

	onBlurValidation = (event) => {	
		if (event.target.value.toString().trim().length < 1) {
			this.setState(update(this.state, {
				errorTexts: {[event.target.name]: {$set: ERROR_MESSAGE.INVALID_INPUT}}
			}));
	    } else {
			this.setState(update(this.state, {
				errorTexts: {[event.target.name]: {$set: ''}}
			}));
	    }
	};

	onDateChange = (newDate, targetName) => {
	    this.onChange({target: {name: targetName, value: newDate}});
	};

	disableFutureDates = (date) => {
		return (date > new Date());
	};

	validateForm = () => {
		for (var field in this.state.formData) {
			if (field !== 'invoiceCopy') { //TODO - text field to have the uploaded file name
				if (this.state.formData[field].toString().trim().length < 1) {
					return false;
				}
			}
		}
		return true;
	};

	submitInvoice = () => {
		if (this.validateForm()) {
			const dueDateTimestamp = new Date(this.state.formData.dueDate).getTime();
			const iDateTimestamp = new Date(this.state.formData.iDate).getTime();
			const invoiceData = {...{id: uuidv1()}, ...this.state.formData,
									 ...{iDate: iDateTimestamp, dueDate: dueDateTimestamp}};
			if (this.state.editMode) {
				this.props.putInvoice(invoiceData);
			} else {
				this.props.postInvoice(invoiceData);
				this.refs.fileUploadForm.submit();
			}
		} else {
			toast.error(ERROR_MESSAGE.INVALID_FORM);
		}
	};

	render() {
		return(
			<div>
				<Row style={{height: "70vh", overflowX: 'hidden', overflowY: 'auto', padding: '20px', margin: 0}}>
				  	<Col sm={12} md={6}>
					  	<TextField 	name='iNumber'
					  				value={this.state.formData.iNumber}
					  				type='number'
					  				floatingLabelStyle={floatingLabelStyle}
					  				floatingLabelText='Invoice number'
					  				underlineShow={true}
					    			fullWidth={true}
					    			onChange={this.onChange}
					    			errorText={this.state.errorTexts.iNumber}
					    			onBlur={this.onBlurValidation}
					    />
					    
					    <DatePicker name='iDate'
					    			value={this.state.formData.iDate && new Date(this.state.formData.iDate)}
					    			floatingLabelStyle={floatingLabelStyle}
					    			floatingLabelText='Invoice Date'
					    			fullWidth={true}
					    			underlineShow={true}
					    			formatDate={new DateTimeFormat('en-US', {
									        day: 'numeric',
									        month: 'long',
									        year: 'numeric',
									      }).format}
					    			shouldDisableDate={this.disableFutureDates}
					    			onChange={(noEvent, value) => this.onDateChange(value, 'iDate')}
					    			onBlur={this.onBlurValidation}
					    			errorText={this.state.errorTexts.iDate}	
					    />
					    
					    <TextField 	name='amount'
					    			value={this.state.formData.amount}
					    			type='number'
					    			floatingLabelStyle={floatingLabelStyle}
					    			floatingLabelText='Invoice amount'
					    	 		underlineShow={true}
					    	 		fullWidth={true}
					    	 		onChange={this.onChange}
					    	 		onBlur={this.onBlurValidation}
					    			errorText= {this.state.errorTexts.amount}
					    />
					    
					    <DatePicker name="dueDate"
					    			value={this.state.formData.dueDate && new Date(this.state.formData.dueDate)}
					    			floatingLabelStyle={floatingLabelStyle}
					    			floatingLabelText="Invoice due date"
					    	
					    			fullWidth={true}
					    			underlineShow={true} 
					    			formatDate={new DateTimeFormat('en-US', {
									        day: 'numeric',
									        month: 'long',
									        year: 'numeric',
									      }).format}
					    			shouldDisableDate={this.disableFutureDates}
					    			onChange={(noEvent, value) => this.onDateChange(value, 'dueDate')}
					    			onBlur={this.onBlurValidation}
					    			errorText={this.state.errorTexts.dueDate}
					    />
					</Col>
					<Col sm={12} md={6}>
					    <TextField	name="customerNumber"
								    value={this.state.formData.customerNumber}
								    type="number"
								    floatingLabelStyle={floatingLabelStyle}
					    			floatingLabelText="Customer number"
					    	
					    	 		underlineShow={true} 
					    			fullWidth={true}
					    			onChange={this.onChange}
					    			errorText= {this.state.errorTexts.customerNumber}
					    			onBlur={this.onBlurValidation}
					    />
					    <TextField 	name="customerCounty"
								    value={this.state.formData.customerCounty}
								    floatingLabelStyle={floatingLabelStyle}
							    	floatingLabelText="Customer country"
							    	fullWidth={true}
							    	underlineShow={true} 
							    	onChange={this.onChange}
							    	onBlur={this.onBlurValidation}
							    	errorText= {this.state.errorTexts.customerCounty}
					    />
					    <TextField 	name="iLineItems"
								    value={this.state.formData.iLineItems}
								    floatingLabelStyle={floatingLabelStyle}
					    			floatingLabelText="Invoice line items"
							    	fullWidth={true}
							    	underlineShow={true} 
							    	onChange={this.onChange}
					    			onBlur={this.onBlurValidation}
					    			errorText= {this.state.errorTexts.iLineItems}
					    />
					    <div style={{display: 'flex', width: '100%'}}>
					    	<div style={{flex: 0.9}}>
							  	<TextField floatingLabelStyle={floatingLabelStyle}
							  		floatingLabelText="Upload invoice copy"
							  		value={this.state.formData.invoiceCopy}
							  		fullWidth={true}
							  		underlineShow={true} 
							  		name="invoiceCopy">
							  	</TextField>
						  	</div>
						  	<div style={{display: 'flex', flex: 0.1, justifyContent: 'flex-end', alignItems: 'flex-end', width: 0}}>
							  	<form action="http://localhost:3001/fileupload" ref="fileUploadForm"
				    					method="post" encType="multipart/form-data" target="fileUploadTarget">
				    				<FlatButton containerElement='label' style={{height: 'auto', textAlign: 'right', lineHeight: 0, paddingBottom: '5px', minWidth: 0}}>
				    					<i className="material-icons">add_circle</i>
										<input type="file" name="filetoupload" style={{display: 'none'}}/>
									</FlatButton>
								</form>
							</div>
					  	</div>
					  	
				  	</Col>
			  	</Row>
			  	<iframe name="fileUploadTarget" style={{ display: 'none'}}></iframe>
			  	<div style={{textAlign: 'right', margin: '20px'}}>
	                <RaisedButton
	                  	label="Submit"
	                  	primary={true}
						onClick={this.submitInvoice}
	                />
			    </div>
		    </div>
		);
	}
}