import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {

  constructor(props) {
    super(props);
    this.state = { task: props.task, index: props.index };
  }

  render = () => (
    <div className="shadow task mt">
      <div className="task-name">{ this.state.task.taskname }</div>
      { this.state.task.state === 'new' ? <div className="icon green tooltip">
        <span className="tooltiptext">Start Task</span>
        <i className="material-icons">play_circle_filled</i>
      </div> : null }
      { this.state.task.state === 'started' ? <div className="icon green tooltip">
        <span className="tooltiptext">Complete Task</span>
        <i className="material-icons">check_circle</i>
      </div> : null }
      <div className="icon red tooltip">
        <span className="tooltiptext">Delete Task</span>
        <i className="material-icons">cancel</i>
      </div>
      
      <div className="dates">
        Created: { this.state.task.createdDate }
      </div>
      { this.state.task.startedDate ? <div className="dates">
        Started: { this.state.task.startedDate }
      </div>: null }
      { this.state.task.endedDate ? <div className="dates">
        Ended: { this.state.task.endedDate }
      </div>: null }
    </div>
  )

}
