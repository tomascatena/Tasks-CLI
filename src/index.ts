import 'colors';
import { inquirerMenu, pause, readInput } from './helpers/inquirer';
import { saveToDB } from './helpers/saveFile';
import { Tasks } from './models/Tasks';
import fs from 'fs';

const main = async () => {
  let option = '';
  const tasks = new Tasks();

  const tasksFromDB = fs.readFileSync('./src/db/db.json', 'utf8');

  if (tasksFromDB) {
    tasks.initializeTasks(JSON.parse(tasksFromDB));
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

        break;
      case '3':
        // List completed tasks
        break;
      case '4':
        // List pending tasks
        break;
      case '5':
        // Complete tasks
        break;
      case '6':
        // Delete tasks
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
