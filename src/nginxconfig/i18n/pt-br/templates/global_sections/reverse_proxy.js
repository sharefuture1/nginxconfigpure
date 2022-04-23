

import common from '../../common';

const legacyXForwarded = 'Legacy X-Forwarded-* headers'; // TODO: translate

export default {
    reverseProxyMustBeEnabledOnOneSite: `O ${common.reverseProxy} deve estar habilitado em pelo menos um site para definir as configurações globais do ${common.reverseProxyLower}.`,
    seconds: 'segundos',
    passOn: `${legacyXForwarded} passed on`, // TODO: translate
    remove: `${legacyXForwarded} actively removed`, // TODO: translate
};
