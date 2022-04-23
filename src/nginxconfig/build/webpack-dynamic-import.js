
import { info } from '../util/log';

const originalSrcDir = document.currentScript.src.split('/').slice(0, -2).join('/') + '/';
window.__webpackDynamicImportURL = () => {
    info(`Using ${originalSrcDir} for webpack dynamic import`);
    return originalSrcDir;
};
