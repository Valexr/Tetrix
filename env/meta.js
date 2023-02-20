import { writeFile } from 'fs/promises';

export default async function meta(bundle) {
    return await writeFile('meta.json', JSON.stringify(bundle.metafile));
}