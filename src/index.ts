import 'colors';
import {
  inquirerMenu,
  pause,
  readInput,
  showTasksToDelete,
  confirmSelection,
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
        break;

      case '6':
        // Delete tasks
        if (tasks.getTasks().length) {
          const taskId = await showTasksToDelete(tasks.getTasks());

          if (taskId === 'all') {
            tasks.deleteAllTasks();
          } else if (taskId === '0') {
            break;
          } else {
            const taskToDelete = tasks.getTasks().find((t) => t.id === taskId);

            let confirmDeleteTask = false;
            if (taskToDelete) {
              confirmDeleteTask = await confirmSelection(
                `Are you sure you want to delete task ${taskToDelete?.title}?`
              );
            }

            if (taskId && confirmDeleteTask) {
              tasks.deleteTask(taskId);
              console.log(`Task ${taskToDelete?.title} was deleted.`.blue.bold);
            }
          }
        } else {
          console.log('There are no tasks to delete.'.red.bold);
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
