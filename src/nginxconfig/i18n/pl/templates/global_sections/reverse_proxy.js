

import common from '../../common';

const legacyXForwarded = 'nagłówka X-Forwarded-* starego typu';

export default {
    reverseProxyMustBeEnabledOnOneSite: `${common.reverseProxy} musi być włączony na conajmniej jednej stronie, aby móc zastosować globalną konfigurację ${common.reverseProxyLower}.`,
    seconds: 'sekund(y)',
    passOn: `Przekazywanie ${legacyXForwarded}`,
    remove: `Aktywne usuwanie ${legacyXForwarded}`,
};
