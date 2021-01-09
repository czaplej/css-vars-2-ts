import fs from 'fs';

export function createTempFile(filePath: string) {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath);
  }
  return undefined;
}
