import React, { Component } from 'react';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Row, Col } from 'react-bootstrap';

const style = {
  	marginLeft: 20,
};

export default class CDocumentation extends Component {

	render() {
	  return (
	  	<Row>
		  	<Col sm={12} md={6}>
			  	<TextField hintText="User uploads copy of utility bill" style={style} underlineShow={false} />
			    <Divider />
			    <TextField hintText="User upload copy of social security number" style={style} underlineShow={false} />
			    <Divider />
		    </Col>
	    </Row>);
	}
}