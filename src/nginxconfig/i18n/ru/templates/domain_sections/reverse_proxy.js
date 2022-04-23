

import common from '../../common';

export default {
    reverseProxyIsDisabled: `${common.reverseProxy} выключено.`,
    reverseProxyCannotBeEnabledWithPhp: `${common.reverseProxy} не может быть включен, пока включен ${common.php}.`,
    reverseProxyCannotBeEnabledWithPython: `${common.reverseProxy} не может быть включен, пока включен ${common.python}.`,
    enableReverseProxy: `${common.enable} ${common.reverseProxyLower}`,
};
