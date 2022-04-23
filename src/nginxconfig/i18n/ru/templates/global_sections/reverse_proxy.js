

import common from '../../common';

const legacyXForwarded = 'Legacy X-Forwarded-* headers'; // TODO: translate

export default {
    reverseProxyMustBeEnabledOnOneSite: `${common.reverseProxy} должен быть включен как минимум на одном сайте, чтобы сконфигурировать глобальные настройки ${common.reverseProxyLower}.`,
    seconds: 'секунд',
    passOn: `${legacyXForwarded} passed on`, // TODO: translate
    remove: `${legacyXForwarded} actively removed`, // TODO: translate
};
