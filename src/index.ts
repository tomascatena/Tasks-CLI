import 'colors';
import { inquirerMenu, pause, readInput } from './helpers/inquirer';
import { Tasks } from './models/Tasks';

const main = async () => {
  let option = '';
  const tasks = new Tasks();

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

    console.log(tasks);

    await pause();
  } while (option !== '0');
};

main();
