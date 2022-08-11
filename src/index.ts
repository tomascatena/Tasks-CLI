import 'colors';
import { inquirerMenu, pause } from './helpers/inquirer';
import { Task } from './models/Task';
import { Tasks } from './models/Tasks';

const main = async () => {
  let option = '';

  do {
    option = await inquirerMenu();

    console.log({ option });

    await pause();
  } while (option !== '0');
};

main();
