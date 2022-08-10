import inquirer from 'inquirer';
import 'colors';

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: ['question 1', 'question 2', 'question 3'],
  },
];

export const inquirerMenu = async (): Promise<string> => {
  console.clear();
  console.log('===================================================='.green);
  console.log('Welcome to the CLI for the Task Manager App'.green);
  console.log('===================================================='.green);
  console.log('');

  const { option } = await inquirer.prompt(menuOptions);

  return option;
};
