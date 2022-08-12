import inquirer from 'inquirer';
import 'colors';
import { Task } from '../models/Task';

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: '1',
        name: `${'1'.green}. Create task`,
      },
      {
        value: '2',
        name: `${'2'.green}. List tasks`,
      },
      {
        value: '3',
        name: `${'3'.green}. List completed task(s)`,
      },
      {
        value: '4',
        name: `${'4'.green}. List pending task(s)`,
      },
      {
        value: '5',
        name: `${'5'.green}. Complete task(s)`,
      },
      {
        value: '6',
        name: `${'6'.green}. Delete task`,
      },
      {
        value: '0',
        name: `${'0'.green}. Exit`,
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  console.log('===================================================='.green);
  console.log('Welcome to the CLI for the Task Manager App'.white);
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

export const readInput = async (message: string) => {
  const { answer } = await inquirer.prompt({
    type: 'input',
    name: 'answer',
    message,
    validate: (input: string) => (input.trim().length > 0 ? true : 'Please enter a value'),
  });

  return answer;
};

export const showTasksToDelete = async (tasks: Task[]) => {
  const { taskId } = await inquirer.prompt({
    type: 'list',
    name: 'taskId',
    message: 'Select a task to delete:',
    choices: tasks.map((task, index) => ({
      value: task.id,
      name: `${(index + 1).toString().green}. ${task.title}`,
    })),
  });

  return taskId;
};

export const confirmSelection = async (message: string): Promise<boolean> => {
  const { answer } = await inquirer.prompt({
    type: 'confirm',
    name: 'answer',
    message,
  });

  return answer;
};
