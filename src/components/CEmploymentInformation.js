import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const style = {
  	marginLeft: 20,
};

export default class CEmploymentInformation extends Component {

	render() {
	  return (
	  	<Row>
		  	<Col sm={12} md={6}>
			  	<TextField hintText="Employers Name" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Employers Address" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Work Phone" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="Job Position" style={style} underlineShow={false} />
			    <Divider />
		    </Col>
	    </Row>);
	}
}