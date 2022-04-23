

import common from '../../common';

const legacyXForwarded = 'Legacy X-Forwarded-* headers';

export default {
    reverseProxyMustBeEnabledOnOneSite: `${common.reverseProxy} must be enabled on at least one site to configure global ${common.reverseProxyLower} settings.`,
    seconds: 'seconds',
    passOn: `${legacyXForwarded} passed on`,
    remove: `${legacyXForwarded} actively removed`,
};
