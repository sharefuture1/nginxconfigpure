

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python} est désactivé.`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python} ne peut pas être activé en même temps que le ${common.reverseProxyLower}.`,
    pythonCannotBeEnabledWithPhp: `${common.python} ne peut pas être activé en même temps que ${common.php}.`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `Règles de ${common.django}`,
    enableDjangoRules: `${common.enable} les règles spécifiques à ${common.django}`,
};
