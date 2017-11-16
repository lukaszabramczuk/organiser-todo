import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Grid,
    Button
} from 'react-bootstrap'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
          <Grid>
              <div style={{
                  border: "1px solid lightgrey",
                  borderRadius: 10,
                  padding: 15,
                  boxShadow: "0px 0px 20px lightgrey"
              }}>
                  <h3 style={{color: "grey"}}> - = ToDo Organiser = -</h3>
              </div>
              <div style={{
                  border: "1px solid lightgrey",
                  borderRadius: 10,
                  padding: 15,
                  boxShadow: "0px 0px 20px lightgrey",
                  height: 150
              }}></div>
              <div style={{
                  border: "1px solid lightgrey",
                  borderRadius: 10,
                  padding: 5,
                  boxShadow: "0px 0px 20px lightgrey"
              }}>
                  <h5 style={{color: "grey", textAlign: "center"}}> - = by Łukasz Abramczuk = -</h5>
              </div>
          </Grid>
      </Router>
    );
  }
}

export default App;
