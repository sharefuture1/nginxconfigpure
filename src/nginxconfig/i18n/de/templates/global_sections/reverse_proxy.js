

import common from '../../common';

const legacyXForwarded = 'Legacy X-Forwarded-* Header';

export default {
    reverseProxyMustBeEnabledOnOneSite: `${common.reverseProxy} muss auf mindestes einer Webseite aktiviert sein, um globale ${common.reverseProxy} Einstellungen zu konfigurieren.`,
    seconds: 'Sekunden',
    passOn: `${legacyXForwarded} weiterleiten`,
    remove: `${legacyXForwarded} aktiv entfernen`,
};
