
import { promises as fs } from 'fs';
import { URL } from 'url';
import fetch from 'node-fetch';

const main = async () => {
    const resp = await fetch('https://assets.digitalocean.com/prism/prism.css');
    const text = await resp.text();

    // Fix $676767 -> #676767
    const fixed = text.replace(/:\s*\$((?:[0-9a-fA-F]{3}){1,2});/g, ':#$1;');

    const buildDir = '../../../build';
    await fs.writeFile(new URL(`${buildDir}/prism.css`, import.meta.url), fixed);
};

main().then(() => {}).catch(err => {
    console.error(err);
    process.exit(1);
});
