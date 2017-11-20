import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends Component {
  render() {
    return (
      <div className="App">

				<Grid fluid>
					<Row>
						<Col xs={12} sm={3} md={6} lg={6} >
							Hello, world!
							<img src={logo} className="App-logo" alt="logo" />
						</Col>
						<Col xs={12} sm={3} md={2} lg={6} >
							Hello, world2!
							<img src={logo} className="App-logo" alt="logo" />
						</Col>
					</Row>
				</Grid>
      </div>
    );
  }
}

export default App;
