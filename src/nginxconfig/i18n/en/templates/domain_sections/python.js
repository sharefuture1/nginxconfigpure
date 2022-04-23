

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python} is disabled.`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python} cannot be enabled whilst the reverse proxy is enabled.`,
    pythonCannotBeEnabledWithPhp: `${common.python} cannot be enabled whilst ${common.php} is enabled.`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `${common.django} rules`,
    enableDjangoRules: `${common.enable} ${common.django}-specific rules`,
};
