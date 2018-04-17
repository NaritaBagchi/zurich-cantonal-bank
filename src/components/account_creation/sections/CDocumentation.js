import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';

const containerFieldButton = {
	display: 'flex',
};
const floatingLabelStyle = {
	fontWeight: 'normal',
};
export default class CDocumentation extends Component {
	updateForm = (event) => {
		this.props.handleChange('documentation', event);
	};

	onUtilBillSelection = (event) => {
		this.updateForm({target: {name: 'utilBillCopy', value: event.target.files[0].name}});
	};

	onSSNCopySelection = (event) => {
		this.updateForm({target: {name: 'ssnCopy', value: event.target.files[0].name}});
	};

	render() {
		const thisForm = this.props.documentation;
	  	return (
	  	<Row style={{height: '65vh', overflowX: 'hidden', overflowY: 'auto', margin: 0, padding: '0 20px'}}>
		  	<Col sm={12} md={6}>
		  		<div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
				  	<TextField	floatingLabelText='Upload utility bill copy'
				  				floatingLabelStyle={floatingLabelStyle}
				  				style={{flex: 1}}
				  				underlineShow={false}
				  				value={thisForm.utilBillCopy}
				  				name='utilBillCopy'>
				  	</TextField>
				  	<form 	action='http://localhost:3001/fileupload'
				  			ref={this.props.utilBillFormRef}
				  			name='utilBillForm'
				    		method='post'
				    		encType='multipart/form-data'
				    		target='utilBillUploadTarget'>
	    				<FlatButton	containerElement='label'
	    							style={{flex: 1, textAlign: 'right', paddingTop: '10px'}}>
	    							<i className='material-icons'>add_circle</i>
									<input	type='file'
											name='filetoupload'
											style={{display: 'none'}}
											onChange={this.onUtilBillSelection} />
						</FlatButton>
					</form>
			  	</div>
			  	<iframe name='utilBillUploadTarget' style={{ display: 'none'}}></iframe>
			  	<iframe name='ssnUploadTarget' style={{ display: 'none'}}></iframe>
			    <Divider />
			    <div style={containerFieldButton}>
				    <TextField 	floatingLabelText='Upload SSN copy' 
				    			floatingLabelStyle={floatingLabelStyle}
				    			fullWidth={true}
				    			underlineShow={false}
				    			value={thisForm.ssnCopy}
				  				name='ssnCopy'/>
				  	<form 	action='http://localhost:3001/fileupload'
				  			ref={this.props.ssnFormRef}
				  			name='ssnForm'
				  			method='post'
				  			encType='multipart/form-data'
				  			target='ssnUploadTarget'>
					    <FlatButton containerElement='label' 
					    			style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1, height: '100%', textAlign: 'right', paddingTop: '10px'}}>
			    						<i className='material-icons'>add_circle</i>
										<input 	type='file'
												name='filetoupload'
												style={{display: 'none'}}
												onChange={this.onSSNCopySelection} />
						</FlatButton>
					</form>
				</div>
				<Divider />
		    </Col>
	    </Row>);
	}
}