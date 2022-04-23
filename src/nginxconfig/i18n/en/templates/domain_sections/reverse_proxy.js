

import common from '../../common';

export default {
    reverseProxyIsDisabled: `${common.reverseProxy} is disabled.`,
    reverseProxyCannotBeEnabledWithPhp: `${common.reverseProxy} cannot be enabled whilst ${common.php} is enabled.`,
    reverseProxyCannotBeEnabledWithPython: `${common.reverseProxy} cannot be enabled whilst ${common.python} is enabled.`,
    enableReverseProxy: `${common.enable} ${common.reverseProxyLower}`,
};
