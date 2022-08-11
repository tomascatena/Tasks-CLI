import { Task } from './Task';

interface TasksList {
  [key: string]: Task;
}

export class Tasks {
  private tasks: TasksList;

  constructor() {
    this.tasks = {};
  }

  add(task: Task) {
    this.tasks[task.id] = task;
  }
}
