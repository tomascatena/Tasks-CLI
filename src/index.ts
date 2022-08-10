import 'colors';
import { inquirerMenu } from './helpers/inquirer';

const main = async () => {
  let option = '';

  do {
    option = await inquirerMenu();

    console.log(`You selected: ${option}`.cyan);
  } while (option !== '0');
};

main();
