import { Task } from './Task';

export class Tasks {
  private tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  createTask(title: string) {
    const task = new Task(title);
    this.tasks.push(task);

    return task;
  }

  getTasks() {
    return this.tasks;
  }

  initializeTasks(tasks: Task[]) {
    this.tasks = tasks;
  }

  listTasks(tasks: Task[]) {
    const tasksToPrint: string[] = [];

    tasks.forEach((task, index) => {
      const status = task.completedOn ? 'Completed' : 'Pending';

      const statusColor = task.completedOn ? 'green' : 'red';
      const taskNumber = (index + 1).toString().green;

      tasksToPrint.push(`${taskNumber}. ${task.title} :: ${status[statusColor]}`);
    });

    return tasksToPrint;
  }

  listTasksByStatus(status: 'completed' | 'pending') {
    const filteredTasks = this.tasks.filter((task) => {
      return task.completedOn ? status === 'completed' : status === 'pending';
    });

    return this.listTasks(filteredTasks);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }

  deleteAllTasks() {
    this.tasks = [];
  }

  setCompletedTasks(tasksIdsToBeCompleted: string[]) {
    this.tasks.forEach((task) => {
      if (tasksIdsToBeCompleted.includes(task.id)) {
        task.completedOn = new Date();
      } else {
        task.completedOn = null;
      }
    });
  }
}
