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

export default class CInvoiceListing extends Component {

	render() {

		const invoiceRows = this.props.invoices.map(function(invoice, index) {
	      return (
	        <TableRow key={index}>
		        <TableHeaderColumn>{invoice.iNumber}</TableHeaderColumn>
		        <TableHeaderColumn>{invoice.status}</TableHeaderColumn>
		        <TableHeaderColumn>{invoice.amount}</TableHeaderColumn>
		        <TableHeaderColumn>{invoice.dueDate}</TableHeaderColumn>
		    </TableRow>
	      );
	    });

		return(
			<div style={{padding: "20px"}}>
				<Row style={{height: "64vh"}}>
				  	<Col sm={12} md={12}>
				  		<Table>
						    <TableHeader>
						      <TableRow>
						        <TableHeaderColumn>Invoice number</TableHeaderColumn>
						        <TableHeaderColumn>Status</TableHeaderColumn>
						        <TableHeaderColumn>Amount</TableHeaderColumn>
						        <TableHeaderColumn>Due date</TableHeaderColumn>
						      </TableRow>
						    </TableHeader>
						    <TableBody>
						        {invoiceRows}
						    </TableBody>
	  					</Table>
				  	</Col>
			  	</Row>
			  	<div style={{marginTop: 12, textAlign: 'right', position: 'relative', bottom: '10px', right: '10px'}}>
                	<FlatButton
	                  label="Delete"
	                  style={{marginRight: 12}}
                	/>
	                <RaisedButton
	                  label="Approve"
	                  variant="raised"
	                  primary={true}
	                />
		        </div>
		    </div>
		);
	}
}