import { rm } from 'node:fs/promises';

export default async function remove(path = 'dist') {
  try {
    await rm(path, { recursive: true });
  } catch {
    console.log(`${path}`);
  }
}
