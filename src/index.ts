import 'colors';
import {
  inquirerMenu,
  pause,
  readInput,
  showTasksToDelete,
  confirmSelection,
  showTasksCheckList,
} from './helpers/inquirer';
import { saveToDB, readFromDB } from './helpers/DBHandlers';
import { Tasks } from './models/Tasks';

const main = async () => {
  let option = '';
  const tasks = new Tasks();

  const tasksFromDB = readFromDB();

  if (tasksFromDB.tasks) {
    tasks.initializeTasks(tasksFromDB.tasks);
  }

  do {
    option = await inquirerMenu();

    switch (option) {
      case '1':
        // Create task
        const title = await readInput('Enter task title: ');
        tasks.createTask(title);

        break;
      case '2':
        // List tasks
        console.log();
        tasks.listTasks(tasks.getTasks()).forEach((task) => console.log(task));

        break;
      case '3':
        // List completed tasks
        console.log();
        tasks.listTasksByStatus('completed').forEach((task) => console.log(task));

        break;
      case '4':
        // List pending tasks
        console.log();
        tasks.listTasksByStatus('pending').forEach((task) => console.log(task));

        break;
      case '5':
        // Complete tasks
        const tasksIdsToBeCompleted = await showTasksCheckList(tasks.getTasks());

        tasks.setCompletedTasks(tasksIdsToBeCompleted);

        break;

      case '6':
        // Delete tasks
        const currentTasks = tasks.getTasks();

        if (!currentTasks.length) {
          console.log('There are no tasks to delete.'.red.bold);
        }

        const taskId = await showTasksToDelete(currentTasks);

        if (taskId === '0') {
          break;
        }

        if (taskId === 'all') {
          tasks.deleteAllTasks();
        }

        const taskToDelete = currentTasks.find((t) => t.id === taskId);

        if (!taskToDelete) {
          console.log('Task not found.'.red.bold);
          break;
        }

        const confirmDeleteTask = await confirmSelection(
          `Are you sure you want to delete task ${taskToDelete?.title}?`
        );

        if (confirmDeleteTask) {
          tasks.deleteTask(taskId);

          console.log(`Task ${taskToDelete?.title} was deleted.`.blue.bold);
        }

        break;
      case '0':
      // Exit

      default:
        break;
    }

    saveToDB(tasks.getTasks());

    await pause();
  } while (option !== '0');
};

main();
