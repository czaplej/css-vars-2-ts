import chalk from 'chalk';

export const { log } = console,
  error = (message: string) => log(chalk.red(message)),
  success = (message: string) => log(chalk.green(message));

export const info = (message: string) => log(chalk(message));
