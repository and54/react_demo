import React, { Component } from 'react';
import './Dashboard.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="card">
        <input type="text" id="task-name" className="input-text" />
        <button>Create Task</button>
      </div>
    )
  }
}
