import inquirer from 'inquirer';
import 'colors';

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: '1',
        name: '1. Create task',
      },
      {
        value: '2',
        name: '2. List tasks',
      },
      {
        value: '3',
        name: '3. List completed task(s)',
      },
      {
        value: '4',
        name: '4. List pending task(s)',
      },
      {
        value: '5',
        name: '5. Complete task(s)',
      },
      {
        value: '6',
        name: '6. Delete task',
      },
      {
        value: '0',
        name: '0. Exit',
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log('===================================================='.green);
  console.log('Welcome to the CLI for the Task Manager App'.green);
  console.log('===================================================='.green);
  console.log('');

  const { option } = await inquirer.prompt(menuOptions);

  return option;
};

export const pause = async () => {
  console.log(`\n`);
  await inquirer.prompt({
    type: 'input',
    name: 'pause',
    message: `Press ${'ENTER'.green} to continue...`,
  });
};
