

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python} выключен.`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python} не может быть включен, пока включен обратный прокси.`,
    pythonCannotBeEnabledWithPhp: `${common.python} не может быть включен, пока включен ${common.php}.`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `${common.django} правила`,
    enableDjangoRules: `${common.enable} ${common.django}-специфичные правила`,
};
