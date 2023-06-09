import React, { Component } from 'react'
import NavBar from './Components/NavBar'
import NewsContainer from './Components/NewsContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/"><NewsContainer key="random" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><NewsContainer key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><NewsContainer key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><NewsContainer key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact path="/health"><NewsContainer key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact path="/science"><NewsContainer key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><NewsContainer key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><NewsContainer key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
