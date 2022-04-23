

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python}已禁用。`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python}在启用${common.reverseProxy}时无法启用。`,
    pythonCannotBeEnabledWithPhp: `${common.python}在启用${common.php}时无法启用。`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `${common.django} 规则`,
    enableDjangoRules: `${common.enable} ${common.django}专属规则`,
};
