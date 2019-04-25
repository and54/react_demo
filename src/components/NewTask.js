import React, { Component } from 'react';
import "./NewTask.css";

export default class NewTask extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="modal">
        <div className="new-task shadow">
          <label for="taskname">Task Name</label>
          <input type="text" id="taskname" name="taskname" placeholder="Task name..." />
          <label for="description">Description</label>
          <textarea id="description" name="description" placeholder="Description..." />
        </div>
      </div>
    )
  }
}
