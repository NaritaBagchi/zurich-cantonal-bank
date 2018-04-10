import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';

const style = {
  	marginLeft: 20,
};
const containerFieldButton = {
	display: "flex",
};

export default class CInvoiceForm extends Component {
	render() {

		return(
			<Row style={{padding: "20px 50px 20px 50px"}}>
			  	<Col sm={12} md={12}>
				  	<TextField hintText="Invoice number" style={style} type="number"
				    	fullWidth={true} underlineShow={false} name="invoiceNumber"/>
				    <Divider />
				    <DatePicker hintText="Invoice date" style={style} 
				    	underlineShow={false} name="invoiceDate"/>
				    <Divider />
				    <TextField hintText="Invoice amount" style={style} type="number"
				    	fullWidth={true} underlineShow={false} name="invoiceAmount"/>
				    <Divider />
				    <DatePicker hintText="Invoice due date" style={style} 
				    	underlineShow={false} 
				    	 name="invoiceDueDate"/>
				    <Divider />
				    <TextField hintText="Customer number" style={style} type="number"
				    	fullWidth={true} underlineShow={false} name="customerNumber"/>
				    <Divider />
				    <TextField hintText="Customer country" style={style} 
				    	underlineShow={false} 
				    	 name="customerCounty"/>
				    <Divider />
				    <TextField hintText="Invoice line items" style={style} 
				    	underlineShow={false} name="invoiceLineItems"/>
				    <Divider />
				    <div style={containerFieldButton}>
					  	<TextField hintText="Upload invoice copy" style={style}
					  		underlineShow={false} name="invoice">
					  	</TextField>
		    			<FlatButton containerElement='label' style={{width: 'auto'}}>
		    				<i className="material-icons">add_circle</i>
							<input style={{display: 'none'}} type="file"/>
						</FlatButton>
				  	</div>
				  	<Divider />
			  	</Col>
		  	</Row>
		);
	}
}