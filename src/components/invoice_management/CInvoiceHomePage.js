import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { Tabs, Tab } from 'material-ui/Tabs';

import CInvoiceForm from './sections/CInvoiceForm';
import CInvoiceListing from './sections/CInvoiceListing';

import * as actions from '../../actions/invoice_management/InvoiceManagementActions';

const HomePageContainer = styled.div`
    height: 100vh;
	width: 100vw;
	background: url('swissflag.jpg') no-repeat center center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const DockerDiv = styled.div`
	width: 70vw;
	background: aliceblue;
	border-radius: 0px;
`;

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export class CInvoiceHomePage extends Component {

	componentDidMount() {
    	this.props.actions.fetchInvoiceList();
  	}

	render() {

		return(
			<HomePageContainer>
				<ToastContainer />
				<DockerDiv>
					<Tabs>
					    <Tab label="Invoice Creation">
					      <CInvoiceForm postInvoice={this.props.actions.postInvoice}/>
					    </Tab>
					    <Tab label="Invoice List" >
					      <CInvoiceListing invoices={this.props.invoices}
					      	updateInvoice={this.props.actions.updateInvoice} 
					      	deleteInvoice={this.props.actions.deleteInvoice} 
					      />
					    </Tab>
	  				</Tabs>
  				</DockerDiv>
			</HomePageContainer>
		);
	}
}

function mapStateToProps(state) {
  return {
    invoices: state.invoiceList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CInvoiceHomePage);
