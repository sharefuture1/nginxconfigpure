

import common from '../../common';

const legacyXForwarded = 'Cabeceras X-Forwarded-* Legacy';

export default {
    reverseProxyMustBeEnabledOnOneSite: `${common.reverseProxy} debe estar habilitado en al menos un sitio para modificar globalmente la configuración ${common.reverseProxyLower}.`,
    seconds: 'segundos',
    passOn: `${legacyXForwarded} transmitido`,
    remove: `${legacyXForwarded} removido`,
};
