import { info } from './log-helper';
import chalk from 'chalk';

export function checkHelpArg(help: boolean) {
  if (help || !process.argv[2]) {
    info(`${chalk.bold("I'm glad that U started using css-vars-2-ts")}`);
    info('Available arguments:');
    info('--help get information about all arguments');
    info('--target A directory where the generated files are placed.');
    info('--targetName A file name for constant.');
    info('--targetModelName A file name for interfaces.');
    info('For more information please check out github page');
    throw '';
  }
}
