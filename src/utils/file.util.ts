import * as fs from 'fs/promises';

export const readFile = async <T = any>(filePath: string): Promise<T> => {
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
};
