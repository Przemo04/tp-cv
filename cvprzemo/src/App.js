import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Sidebar from './sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">

				<Grid fluid>
					<Row>
						<Col xs={12} sm={3} md={3} lg={3} >
							<Sidebar />
							Hello, world!
							<img src={logo} className="App-logo" alt="logo" />
						</Col>
						<Col xs={12} sm={9} md={9} lg={9} >
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
