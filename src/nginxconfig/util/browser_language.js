
import { fromSep } from './language_packs';

export default availablePacks => {
    if (typeof window === 'object' && typeof window.navigator === 'object') {
        const userLocales = new Set();

        // Get the user languages
        if (Array.isArray(window.navigator.languages))
            window.navigator.languages.forEach(locale => userLocales.add(locale));
        if (typeof window.navigator.language === 'string')
            userLocales.add(window.navigator.language);
        if (Intl && 'DateTimeFormat' in Intl)
            if (Intl.DateTimeFormat().resolvedOptions().locale !== 'und')
                userLocales.add(Intl.DateTimeFormat().resolvedOptions().locale);

        // Try to find an exact region/language match
        const exactMatch = [...userLocales.values()].find(locale => availablePacks.includes(fromSep(locale, '-')));
        if (exactMatch) return fromSep(exactMatch, '-');

        // Build a map of languages to pack
        const i18nPackLanguages = availablePacks.reduce((map, pack) => {
            const lang = pack.match(/^[a-z]+/)[0];
            if (!(lang in map)) map[lang] = pack;
            return map;
        }, {});

        // Try to match a user language to a pack language
        const langMatch = [...userLocales.values()].find(x => Object.keys(i18nPackLanguages).includes(x.split('-')[0].toLowerCase()));
        if (langMatch) return i18nPackLanguages[langMatch.split('-')[0].toLowerCase()];

        return false;
    }
};
