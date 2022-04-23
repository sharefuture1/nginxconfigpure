
// Load in the app
import './scss/style.scss';
import { createApp } from 'vue';
import './util/prism_bundle';
import { getI18n } from './i18n/setup';
import App from './templates/app';

// Load the i18n languages and run the app
getI18n().then(i18n => {
    const app = createApp(App);
    app.use(i18n);
    app.mount('#app');
});
