

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python} jest wyłączony.`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python} nie może zostać włączony dopóki włączony jest reverse proxy.`,
    pythonCannotBeEnabledWithPhp: `${common.python} nie może zostać włączony dopóki włączony jest ${common.php}.`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `reguły ${common.django}`,
    enableDjangoRules: `${common.enable} reguły specyficzne dla ${common.django}`,
};
