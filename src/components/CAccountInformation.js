import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const style = {
  	marginLeft: 20,
};

export default class CAccountInformation extends Component {

	render() {
	  return (
	  	<Row>
		  	<Col sm={12} md={6}>
			  	<TextField hintText="Account type" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Purpose of bank account" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Where will the money come from?" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="How did you hear about us?" style={style} underlineShow={false} />
			    <Divider />
		    </Col>
	    </Row>);
	}
}