

import common from '../../common';

export default {
    reverseProxyIsDisabled: `${common.reverseProxy}已禁用。`,
    reverseProxyCannotBeEnabledWithPhp: `${common.reverseProxy}在启用${common.php}时无法启用。`,
    reverseProxyCannotBeEnabledWithPython: `${common.reverseProxy}在启用${common.python}时无法启用。`,
    enableReverseProxy: `${common.enable} ${common.reverseProxyLower}`,
};
