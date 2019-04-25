import React, { Component } from 'react';
import NewTask from './NewTask';
import './styles.css';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="card shadow">
        {/* <input type="text" id="task-name" className="input-text" />
        <button>Create Task</button> */}
        <div>
          <button className="round">+</button>
        </div>
        <NewTask />
      </div>
    )
  }
}
