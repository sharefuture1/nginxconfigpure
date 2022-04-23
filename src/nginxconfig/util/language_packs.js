
export const defaultPack = 'en';

export { default as defaultPackData } from '../i18n/en';

export const toSep = (pack, sep) => pack
    .match(/^([a-z]+)([A-Z]*)$/)
    .slice(1)
    .map(x => x.toLowerCase())
    .filter(x => !!x)
    .join(sep);

export const fromSep = (pack, sep) => pack.split(sep, 2)[0].toLowerCase() + (pack.split(sep, 2)[1] || '').toUpperCase();

// Export a static array of all language packs
export const availablePacks = Object.freeze([
    'de',
    'en',
    'es',
    'fr',
    'pl',
    'ptBR',
    'ru',
    'zhCN',
    'zhTW',
]);
