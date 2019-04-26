import React, { Component } from 'react';
import EventBus from '../services/EventBus';
import moment from 'moment';
import "./NewTask.css";

export default class NewTask extends Component {

  closeNewTask = () => {
    EventBus.eventEmitter.emit('newTaskValue', false);
  }

  createTask = () => {
    const taskname = this.refs.taskname.value;
    const description = this.refs.taskname.value;
    const d = new Date();
    console.log(d);
    if (taskname && description) {
      const task = {
        taskname,
        description,
        showDescription: false,
        state: 'new',
        createdDate: moment(new Date()).format('MMM Do h:mm')
      }
      EventBus.createTask(task);
      this.closeNewTask();
    } else alert('Please add Task Name and Description to the task');
  }

  render = () => (
    <div>
      <div className="modal" onClick={this.closeNewTask} />
      <div className="new-task shadow">
        <div>
          <label>Task Name</label>
          <input type="text" ref="taskname" placeholder="Task name..." />
          <label>Description</label>
          <textarea ref="description" placeholder="Description..." />
        </div>
        <div className="right mt">
          <button onClick={this.createTask}>Create Task</button>
        </div>
      </div>
    </div>
  )

}
