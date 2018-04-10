import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

const style = {
  	marginLeft: 20,
  	width: "100%",
};
const containerFieldButton = {
	display: "flex",
};
export default class CDocumentation extends Component {
	updateForm = (event) => {
		this.props.handleChange('documentation', event);
	};

	render() {
		const thisForm = this.props.documentation;
	  	return (
	  	<Row>
		  	<Col sm={12} md={6}>
		  		<div style={containerFieldButton}>
				  	<TextField hintText="Upload utility bill copy" style={style}
				  		underlineShow={false} defaultValue={thisForm.utilBillCopy}
				  		name="utilBillCopy">
				  	</TextField>
	    			<FlatButton containerElement='label' style={{width: 'auto'}}>
	    				<i className="material-icons">add_circle</i>
						<input style={{display: 'none'}} type="file"/>
					</FlatButton>
			  	</div>
			    <Divider />
			    <div style={containerFieldButton}>
				    <TextField hintText="Upload SSN copy" style={style}
				    	underlineShow={false} defaultValue={thisForm.ssnCopy} 
				  		name="ssnCopy"/>
				    <FlatButton containerElement='label' style={{width: 'auto'}}>
		    				<i className="material-icons">add_circle</i>
							<input style={{display: 'none'}} type="file"/>
					</FlatButton>
				</div>
				<Divider />
		    </Col>
	    </Row>);
	}
}