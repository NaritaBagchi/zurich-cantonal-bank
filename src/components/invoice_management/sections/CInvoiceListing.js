import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import update from 'immutability-helper';

import { formatDate } from '../../../utils/Utility';
import { INVOICE_STATUS, BUTTON_LABELS } from '../../../Constants';

export default class CInvoiceListing extends Component {

	constructor (props) {
		super(props);
		this.state = {
			selectedInvoices: [],
		};
	}

	handleRowSelection = (selectedRows) => {
		this.setState({
			selectedInvoices: selectedRows,
		});
	};

	handleCellClick = (rowNumber, columnNumber) => {
		if (columnNumber === 4) {
			const invoiceToEdit = this.props.invoices[rowNumber];
			this.props.launchEditInvoice(invoiceToEdit);
		}
	};

	isSelected = (index) => {
    	return this.state.selectedInvoices.indexOf(index) !== -1;
  	};

	approveInvoices = () => {
		this.state.selectedInvoices.map((i) => {
			const data = {
				id: this.props.invoices[i].id,
				entity: {...this.props.invoices[i], ...{status: INVOICE_STATUS.APPROVED}},
			};
			this.props.patchInvoice(data);
		});

	};

	deleteInvoices = () => {
		this.state.selectedInvoices.map((i) => {
			const data = {
				id: this.props.invoices[i].id,
			};
			this.props.deleteInvoice(data);
		});
	};

	render() {

		const invoiceRows = this.props.invoices.map((invoice, index) => {
			const iDueDate = new Date(invoice.dueDate);
			return (
		        <TableRow key={index} selected={this.isSelected(index)}>
			        <TableRowColumn>{invoice.iNumber}</TableRowColumn>
			        <TableRowColumn>{invoice.status}</TableRowColumn>
			        <TableRowColumn>{invoice.amount}</TableRowColumn>
			        <TableRowColumn>{formatDate(iDueDate)}</TableRowColumn>
			        <TableRowColumn style={{textAlign: "center"}}>
			        	<FlatButton containerElement='label' style={{width: 'auto', height: "25px"}}>
				    		<i className="material-icons">edit</i>
				    	</FlatButton>
			        </TableRowColumn>
			    </TableRow>
	      );
	    });

		return(
			<div>
				<Row style={{height: "70vh", overflowX: "hidden", overflowY: "auto", margin: 0}}>
				  	<Col sm={12} md={12} style={{padding: 0}}>
				  		<Table 	multiSelectable={true}
				  				onRowSelection={this.handleRowSelection}
				  				onCellClick={this.handleCellClick}>
						    <TableHeader>
						      <TableRow>
						        <TableHeaderColumn>Invoice number</TableHeaderColumn>
						        <TableHeaderColumn>Status</TableHeaderColumn>
						        <TableHeaderColumn>Amount</TableHeaderColumn>
						        <TableHeaderColumn>Due date</TableHeaderColumn>
						        <TableHeaderColumn>Action</TableHeaderColumn>
						      </TableRow>
						    </TableHeader>
						    <TableBody deselectOnClickaway={false} preScanRows={false}>
						        {invoiceRows}
						    </TableBody>
	  					</Table>
				  	</Col>
			  	</Row>
			  	<div style={{textAlign: 'right', position: 'relative', padding: '20px'}}>
                	<FlatButton
	                  label='Delete'
	                  style={{marginRight: 12}}
	                  onClick={this.deleteInvoices}
                	/>
	                <RaisedButton
	                  label='Approve'
	                  primary={true}
	                  onClick={this.approveInvoices}
	                />
		        </div>
		    </div>
		);
	}
}