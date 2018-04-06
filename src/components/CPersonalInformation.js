import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const style = {
  	marginLeft: 20,
};

export default class CPersonalInformation extends Component {

	render() {
	  return (
	  	<Row>
		  	<Col sm={12} md={6}>
			  	<TextField hintText="Title" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="First name" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Middle name" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Last name" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Home phone" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Mobile phone" style={style} underlineShow={false} />
		    	<Divider />
		    </Col>
		    <Col sm={12} md={6}>
			    <TextField hintText="Email address" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Mailing address" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Social Security Number" style={style} underlineShow={false} />
			    <Divider />
		    </Col>
	    </Row>);
	}
}