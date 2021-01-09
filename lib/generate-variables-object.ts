import { capitalizeFirstLetter } from './utils';
export function generateVariablesObject<T extends unknown>(
  obj: T,
  vars: string[]
) {
  for (const var1 of vars) {
    const [objectName, ...rest] = var1
      .replace('-', '')
      .replace('-', '')
      .split('-');
    const [first, ...capitalize] = rest;
    const capitalizedArr = capitalize.map((x) => capitalizeFirstLetter(x));
    const valueName = [first, ...capitalizedArr].join('');
    if (obj[objectName] !== undefined) {
      obj[objectName] = { ...obj[objectName], [valueName]: `var(${var1})` };
    } else {
      if (!first) {
        obj[objectName] = `var(${var1})`;
      } else {
        obj[objectName] = { [valueName]: `var(${var1})` };
      }
    }
  }
}
