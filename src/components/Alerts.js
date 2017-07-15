import React, { Component } from 'react';

class Alerts extends Component {

  render() {
    var alertItems = Object.keys(this.props.alerts).map((key) => {
      var alert = this.props.alerts[key]
      return (
        <div className={"alert alert-" + alert.type}>{alert.message}</div>
      )
    })
    return (
      <div className="alerts">
        { alertItems }
      </div>
    )
  }
}

export default Alerts
