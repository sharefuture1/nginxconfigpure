

import browserLanguage from '../src/nginxconfig/util/browser_language';

class MockLocales {
    static languages = [];

    static language = null;

    static IntlBackup = null;

    static navigator = null;

    static setNavigatorLanguages(langs) {
        MockLocales.languages = langs;
        return this;
    }

    static setNavigatorLanguage(lang) {
        MockLocales.language = lang;
        return this;
    }

    static setDateTimeLocale(locale) {
        MockLocales.IntlBackup = Intl;
        if (!locale) {
            // eslint-disable-next-line no-global-assign
            Intl = undefined;
            return this;
        }

        const newDateTimeFormat = new Intl.DateTimeFormat(locale);
        // eslint-disable-next-line no-global-assign
        Intl = {
            DateTimeFormat() {
                return newDateTimeFormat;
            },
        };
        return this;
    }

    static restoreDateTimeLocale() {
        // eslint-disable-next-line no-global-assign
        Intl = MockLocales.IntlBackup;
        MockLocales.IntlBackup = null;
        return this;
    }

    static setNavigator(navigator) {
        MockLocales.navigator = window.navigator;
        window.navigator = navigator;
        return this;
    }

    static restoreNavigator() {
        window.navigator = MockLocales.navigator;
        MockLocales.navigator = null;
        return this;
    }
}

Object.defineProperty(window.navigator, 'languages', { get: () => {
    return MockLocales.languages || [];
}});

Object.defineProperty(window.navigator, 'language', { get: () => {
    return MockLocales.language || null;
}});


describe('browserLanguage', () => {
    test('Selects the first available exact match for language/region', () => {
        MockLocales.setDateTimeLocale(undefined);

        MockLocales.setNavigatorLanguages(['zh-CN', 'zh','en-US','en']);
        expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('zhCN');

        MockLocales.setNavigatorLanguages(['zh-TW','zh','en-US','en']);
        expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('zhTW');

        MockLocales.setNavigatorLanguages(['zh', 'en-US', 'en']);
        expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('en');

        MockLocales.restoreDateTimeLocale();
    });

    test('Selects the first available language match based on language/region',() => {
        MockLocales.setDateTimeLocale(undefined);

        MockLocales.setNavigatorLanguages(['ja-JP', 'ja', 'en-US']);
        expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('en');

        MockLocales.restoreDateTimeLocale();
    });

    test('Selects the first available language match based on language alone',() => {
        MockLocales.setDateTimeLocale(undefined);

        MockLocales.setNavigatorLanguages(['ja-JP', 'ja', 'zh']);
        expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('zhCN');

        MockLocales.restoreDateTimeLocale();
    });

    test('Returns false when there is no available match',() => {
        MockLocales.setDateTimeLocale(undefined);

        MockLocales.setNavigatorLanguages(['ja-JP','ja']);
        expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toBeFalsy();

        MockLocales.restoreDateTimeLocale();
    });

    describe('Different sources for user locale', () => {
        test('language, languages and and Intl locale are `undefined`',() => {
            MockLocales.setNavigatorLanguages(undefined);
            MockLocales.setNavigatorLanguage(undefined);
            MockLocales.setDateTimeLocale(undefined);
            expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toBeFalsy();
            MockLocales.restoreDateTimeLocale();
        });

        test('language is `en`, languages and Intl locale are `undefined`',() => {
            MockLocales.setNavigatorLanguage('en');
            MockLocales.setNavigatorLanguages(undefined);
            MockLocales.setDateTimeLocale(undefined);
            expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('en');
            MockLocales.restoreDateTimeLocale();
        });

        test('language and Intl locale are `undefined`, languages is `en-US, en`',() => {
            MockLocales.setNavigatorLanguage(undefined);
            MockLocales.setNavigatorLanguages(['en-US','en']);
            MockLocales.setDateTimeLocale(undefined);
            expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('en');
            MockLocales.restoreDateTimeLocale();
        });

        test('navigator is `undefined` and Intl locale is `en-US`',() => {
            MockLocales.setNavigator(undefined);
            MockLocales.setDateTimeLocale('en-US');
            expect(browserLanguage(['en', 'zhCN', 'zhTW'])).toEqual('en');
            MockLocales.restoreDateTimeLocale();
            MockLocales.restoreNavigator();
        });
    });
});
