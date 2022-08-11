import 'colors';
import { inquirerMenu, pause } from './helpers/inquirer';

const main = async () => {
  let option = '';

  do {
    option = await inquirerMenu();

    console.log({ option });

    await pause();
  } while (option !== '0');
};

main();
