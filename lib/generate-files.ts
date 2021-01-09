import * as fs from 'fs';
import * as util from 'util';
import JsonToTS from 'json-to-ts';
import * as path from 'path';
import sass from 'node-sass';
import { createTempFile } from './create-tmp-file';
import { capitalizeFirstLetter } from './utils';
import { generateVariablesObject } from './generate-variables-object';

// special regex get from string all between curly brackets and between brackets FE: [data-theme=light] {...}
const regex = /\[.*?\] {([^}]+)}/g;
const regexGetCSSVariables = /--(.*)/g;
const getThemeNameRegex = /\[(.*)]/g;

export function generateFiles(
  filePath: string,
  targetPath: string,
  targetName = './generatedFile.ts',
  targetModelName = './generatedFileModel.ts'
) {
  const styles = sass.renderSync({ file: filePath }).css.toString();
  let result = {};
  const themes = styles.match(regex);
  for (const theme of themes) {
    const themeObject = {};
    const nameOfTheme = theme
      .match(getThemeNameRegex)[0]
      .replace('[', '')
      .replace(']', '')
      .split('=')[1]
      .replace('"', '')
      .replace('"', '')
      .replace("'", '')
      .replace("'", '');
    const vars = theme.match(regexGetCSSVariables).map((x) => x.split(':')[0]);
    themeObject[nameOfTheme] = {};
    generateVariablesObject(themeObject[nameOfTheme], vars);
    result = { ...result, [nameOfTheme]: themeObject[nameOfTheme] };
  }

  const [constTsFilePath, modelTsFilePath] = [
    path.resolve(targetPath, targetName),
    path.resolve(targetPath, targetModelName),
  ];
  const [tmpconstTsFile, tmpmodelTsFile] = [
    createTempFile(constTsFilePath),
    createTempFile(modelTsFilePath),
  ];

  // Generate out files
  fs.writeFile(
    constTsFilePath,
    `export const themes = ${util.inspect(result)}`,
    { encoding: 'utf8' },
    (err) => {
      if (err) {
        throw err.message;
      }
    }
  );
  fs.writeFile(
    modelTsFilePath,
    JsonToTS(result)
      .map((x) =>
        x
          .replace('RootObject', 'Themes')
          .replace('interface', 'export interface')
      )
      .join('\n'),
    { encoding: 'utf8' },
    (err) => {
      if (err) {
        //Rollback previous file
        fs.writeFileSync(constTsFilePath, tmpconstTsFile);
        throw err.message;
      }
    }
  );
}
