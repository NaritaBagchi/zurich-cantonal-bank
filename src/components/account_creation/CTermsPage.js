import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { termsText } from '../../resources/termstext'

export default class CTermsPage extends Component {
	render () {
		const actions = [
      		<FlatButton
        		label="Decline"
        		onClick={this.props.handleDecline}
      		/>,
	      	<FlatButton
	        	label="Agree"
	        	primary={true}
	        	onClick={this.props.handleAgree}
	      	/>,
    	];
		return (
			<Dialog title="Terms and Conditions" actions={actions}
				modal={true} open={true} autoScrollBodyContent={true}>
    			<div>
					{termsText.text}
				</div>
        	</Dialog>
        );
	}
}