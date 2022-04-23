

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python} ist deaktiviert.`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python} kann nicht aktiviert werden, während ein Reverse Proxy aktiviert ist.`,
    pythonCannotBeEnabledWithPhp: `${common.python} kann nicht aktiviert werden, während ${common.php} aktiviert ist.`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `${common.django} Regeln`,
    enableDjangoRules: `${common.enable} ${common.django}-spezifische Regeln`,
};
