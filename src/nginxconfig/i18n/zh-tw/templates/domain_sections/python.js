

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python}已停用。`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python}在啟用${common.reverseProxy}時無法啟用。`,
    pythonCannotBeEnabledWithPhp: `${common.python}在啟用${common.php}時無法啟用。`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `${common.django} 規則`,
    enableDjangoRules: `${common.enable} ${common.django}專屬規則`,
};
