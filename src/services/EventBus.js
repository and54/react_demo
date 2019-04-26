import events from 'events';
import moment from 'moment';

export default class EventBus {

  static eventEmitter = new events.EventEmitter();
  static getEventEmitter = () => this.eventEmitter;

  static tasks = [];
  static getTasks = () => this.tasks;
  static createTask = (task) => { this.tasks.push(task); }
  static removeTask = (index) => { this.tasks.splice(index, 1); }
  static updateTask = (index, prop, value) => {
    this.tasks[index][prop] = value;
  }

  static actualDate = () => moment(new Date()).format('MMM Do HH:mm');

}
