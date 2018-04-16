import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

import { Tabs, Tab } from 'material-ui/Tabs';

import CInvoiceForm from './sections/CInvoiceForm';
import CInvoiceListing from './sections/CInvoiceListing';

import * as actions from '../../actions/invoice_management/InvoiceManagementActions';
import {
	INVOICE_CREATION_FORM, 
	INVOICE_LISTING,
	INVOICE_LISTING_HEADER,
	INVOICE_CREATION_FORM_HEADER
} from '../../Constants';

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

export class CInvoiceHomePage extends Component {

	componentDidMount() {
    	this.props.actions.fetchInvoiceList();
  	}

  	handleTabChange = (tabValue) => {
  		this.props.actions.selectTab(tabValue);
  	};

	render() {
		return(
			<HomePageContainer>
				<ToastContainer />
				<DockerDiv>
					<Tabs value={this.props.selectedTab} onChange={this.handleTabChange}>
					    <Tab label={INVOICE_CREATION_FORM_HEADER} value={INVOICE_CREATION_FORM}>
					      <CInvoiceForm postInvoice={this.props.actions.postInvoice}
					      				putInvoice={this.props.actions.putInvoice}
					      				activeForm={this.props.activeForm}
					      				editMode={this.props.editMode}/>
					    </Tab>
					    <Tab label={INVOICE_LISTING_HEADER} value={INVOICE_LISTING}>
					      <CInvoiceListing	invoices={this.props.invoices}
									      	patchInvoice={this.props.actions.patchInvoice} 
									      	deleteInvoice={this.props.actions.deleteInvoice} 
									      	selectTab={this.props.actions.selectTab}
									      	launchEditInvoice={this.props.actions.launchEditInvoice}
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
    invoices: state.invoiceList,
    selectedTab: state.selectedTab,
    activeForm: state.activeInvoice,
    editMode: state.editMode
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CInvoiceHomePage);
