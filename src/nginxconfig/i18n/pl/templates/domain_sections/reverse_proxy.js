

import common from '../../common';

export default {
    reverseProxyIsDisabled: `${common.reverseProxy} jest wyłączone.`,
    reverseProxyCannotBeEnabledWithPhp: `${common.reverseProxy} nie może zostać włączony dopóki włączony jest ${common.php}.`,
    reverseProxyCannotBeEnabledWithPython: `${common.reverseProxy} nie może zostać włączony dopóki włączony jest ${common.python}.`,
    enableReverseProxy: `${common.enable} ${common.reverseProxyLower}`,
};
