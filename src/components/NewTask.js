import React, { Component } from 'react';
import EventBus from '../services/EventBus';
import "./NewTask.css";

export default class NewTask extends Component {

  closeNewTask = () => {
    EventBus.eventEmitter.emit('newTaskValue', false);
  }

  createTask = () => {
    const taskname = this.refs.taskname.value;
    const description = this.refs.description.value;
    if (taskname && description) {
      const task = {
        taskname,
        description,
        showDescription: false,
        status: 'new',
        createdDate: EventBus.actualDate()
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
          <textarea rows="3" ref="description" placeholder="Description..." />
        </div>
        <div className="right mt">
          <button onClick={this.createTask}>Create Task</button>
        </div>
      </div>
    </div>
  )

}
