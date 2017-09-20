import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>{ this.props.title }</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li><Link to="/">Home</Link>
              </li>
              <li className="separator">&nbsp;</li>
              <li><Link to={ this.props.location.path }>{ this.props.location.title }</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PageTitle
