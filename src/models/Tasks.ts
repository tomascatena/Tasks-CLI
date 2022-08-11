import { Task } from './Task';

interface TasksList {
  [key: string]: Task;
}

export class Tasks {
  private tasks: TasksList;

  constructor() {
    this.tasks = {};
  }

  createTask(title: string) {
    const task = new Task(title);
    this.tasks[task.id] = task;

    return task;
  }

  getArrayOfTasks() {
    return Object.values(this.tasks);
  }
}
