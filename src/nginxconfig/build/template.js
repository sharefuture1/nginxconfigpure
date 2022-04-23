
import fs from 'fs';
import { URL } from 'url';

// Fetch the posthtml template and convert it to an ejs template
const main = () => {
    const buildDir = '../../../build';
    let template = fs.readFileSync(new URL(`${buildDir}/base.html`, import.meta.url), 'utf8');

    // Inject our title now
    template = template.replace('<block name="title"><title>DigitalOcean</title></block>', '<title>NGINXConfig | DigitalOcean</title>');

    // Inject our app mounting point
    template = template.replace('<block name="content"></block>', '<div id="app"></div>');

    fs.writeFileSync(new URL(`${buildDir}/index.html`, import.meta.url), template);
};

main();
