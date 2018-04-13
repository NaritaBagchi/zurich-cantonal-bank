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
			
		}
	};

	isSelected = (index) => {
    	return this.state.selectedInvoices.indexOf(index) !== -1;
  	};

	approveInvoices = () => {
		this.state.selectedInvoices.map((i) => {
			const data = {
				id: this.props.invoices[i].id,
				entity: {...this.props.invoices[i], ...{status: 'Approved'}},
			};
			this.props.updateInvoice(data);
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
	      return (
	        <TableRow key={index} selected={this.isSelected(index)}>
		        <TableRowColumn>{invoice.iNumber}</TableRowColumn>
		        <TableRowColumn>{invoice.status}</TableRowColumn>
		        <TableRowColumn>{invoice.amount}</TableRowColumn>
		        <TableRowColumn>{invoice.dueDate}</TableRowColumn>
		        <TableRowColumn>
		        	<FlatButton containerElement='label' style={{width: 'auto'}}>
			    		<i className="material-icons">edit</i>
			    	</FlatButton>
		        </TableRowColumn>
		    </TableRow>
	      );
	    });

		return(
			<div style={{padding: "20px"}}>
				<Row style={{height: "64vh"}}>
				  	<Col sm={12} md={12}>
				  		<Table multiSelectable={true} onRowSelection={this.handleRowSelection}
				  			onCellClick={this.handleCellClick}>
						    <TableHeader>
						      <TableRow>
						        <TableHeaderColumn>Invoice number</TableHeaderColumn>
						        <TableHeaderColumn>Status</TableHeaderColumn>
						        <TableHeaderColumn>Amount</TableHeaderColumn>
						        <TableHeaderColumn>Due date</TableHeaderColumn>
						        <TableHeaderColumn>Edit</TableHeaderColumn>
						      </TableRow>
						    </TableHeader>
						    <TableBody deselectOnClickaway={false} preScanRows={false}>
						        {invoiceRows}
						    </TableBody>
	  					</Table>
				  	</Col>
			  	</Row>
			  	<div style={{marginTop: 12, textAlign: 'right', position: 'relative', bottom: '10px', right: '10px'}}>
                	<FlatButton
	                  label="Delete"
	                  style={{marginRight: 12}}
	                  onClick={this.deleteInvoices}
                	/>
	                <RaisedButton
	                  label="Approve"
	                  primary={true}
	                  onClick={this.approveInvoices}
	                />
		        </div>
		    </div>
		);
	}
}