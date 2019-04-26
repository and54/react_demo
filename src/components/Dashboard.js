import React, { Component } from 'react';
import NewTask from './NewTask';
import Task from './Task'
import EventBus from '../services/EventBus';
import './styles.css';

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = { showNewTask: false, tasksUpdated: 0 };
    EventBus.getEventEmitter().on('newTaskValue', this.newTaskValue);
    EventBus.getEventEmitter().on('tasksUpdated', this.tasksUpdated);
  }

  openNewTask = () => {
    this.newTaskValue(true);
  }

  newTaskValue = (show = false) => {
    this.setState({ showNewTask: show });
  }

  tasksUpdated = () => {
    this.setState({ tasksUpdated: ++this.tasksUpdated });
  }

  render = () => (
    <div className="card shadow">
      <div className="title gray">List of Tasks</div>
      <hr />
      <div className="tasks">
        { EventBus.getTasks().map((task, index) => 
          <Task key={ index } index={ index } task={ task } />
        ) }
      </div>
      <div>
        <button className="round" onClick={ this.openNewTask }>
          <i className="material-icons">add</i>
        </button>
      </div>
      { this.state.showNewTask ? <NewTask /> : null }
    </div>
  )

}
