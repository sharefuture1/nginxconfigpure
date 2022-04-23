

import common from '../../common';

const legacyXForwarded = 'En-têtes dépréciés X-Forwarded-*';

export default {
    reverseProxyMustBeEnabledOnOneSite: `Le ${common.reverseProxyLower} doit être activé sur au moins un site pour configurer les paramètres globaux du ${common.reverseProxyLower}.`,
    seconds: 'secondes',
    passOn: `${legacyXForwarded} transmis`,
    remove: `${legacyXForwarded} supprimés`,
};
