import React, { Component } from 'react';
import EventBus from '../services/EventBus';
import './Task.css';

export default class Task extends Component {

  constructor(props) {
    super(props);
    this.state = { task: props.task, index: props.index };
  }

  startTask = () => {
    EventBus.updateTask(this.state.index, 'startedDate', EventBus.actualDate());
    EventBus.updateTask(this.state.index, 'status', 'started');
    EventBus.eventEmitter.emit('tasksUpdated');
  }

  completeTask = () => {
    EventBus.updateTask(this.state.index, 'completedDate', EventBus.actualDate());
    EventBus.updateTask(this.state.index, 'status', 'completed');
    EventBus.eventEmitter.emit('tasksUpdated');
  }

  deleteTask = () => {
    EventBus.removeTask(this.state.index);
    EventBus.eventEmitter.emit('tasksUpdated');
  }

  showDescription = () => {
    EventBus.updateTask(this.state.index, 'showDescription', !this.state.task.showDescription);
    EventBus.eventEmitter.emit('tasksUpdated');
  }

  render = () => (
    <div className="shadow mt task">

      <div className=" task-container">
        { this.state.task.status === 'completed' ? <div className="selected-green">
          <i className="material-icons icon-right-space">done</i>
        </div> : null }
        <div className="task-name">{ this.state.task.taskname }</div>
        { this.state.task.status === 'new' ? <div className="icon green tooltip" onClick={this.startTask}>
          <span className="tooltiptext">Start Task</span>
          <i className="material-icons">play_circle_filled</i>
        </div> : null }
        { this.state.task.status === 'started' ? <div className="icon green tooltip" onClick={this.completeTask}>
          <span className="tooltiptext">Complete Task</span>
          <i className="material-icons">check_circle</i>
        </div> : null }
        <div className="icon red tooltip" onClick={this.deleteTask}>
          <span className="tooltiptext">Delete Task</span>
          <i className="material-icons">cancel</i>
        </div>
      </div>
      
      <div className=" task-container">
        <div className="dates">
          Created: { this.state.task.createdDate }
        </div>
        { this.state.task.startedDate ? <div className="dates">
          Started: { this.state.task.startedDate }
        </div>: null }
        { this.state.task.completedDate ? <div className="dates">
          Ended: { this.state.task.completedDate }
        </div>: null }
        <div className="icon tooltip" onClick={this.showDescription}>
          <span className="tooltiptext">Show Description</span>
          <i className="material-icons">
            { this.state.task.showDescription ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }
          </i>
        </div>
      </div>

      { this.state.task.showDescription ? 
      <div className="shadow-inverted task-description">
        { this.state.task.description }
      </div> : null }

    </div>
  )

}
