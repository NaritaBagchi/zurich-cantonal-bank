import React, { Component } from 'react';
import styled from 'styled-components';

import { Tabs, Tab } from 'material-ui/Tabs';

import CInvoiceForm from './sections/CInvoiceForm';

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
	height: 85vh;
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

export default class CInvoiceHomePage extends Component {
	render() {

		return(
			<HomePageContainer>
				<DockerDiv>
					<Tabs>
					    <Tab label="Invoice Creation">
					      <CInvoiceForm />
					    </Tab>
					    <Tab label="Invoice List" >
					      <div>
					        <h2 style={styles.headline}>Tab Two</h2>
					        <p>
					          This is another example tab.
					        </p>
					      </div>
					    </Tab>
	  				</Tabs>
  				</DockerDiv>
			</HomePageContainer>
		);
	}
}