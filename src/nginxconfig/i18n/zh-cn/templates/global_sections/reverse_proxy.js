

import common from '../../common';

const legacyXForwarded = '传统 X-Forwarded-* 请求头';

export default {
    reverseProxyMustBeEnabledOnOneSite: `必须在至少一个站点上启用${common.reverseProxy}才能配置全局${common.reverseProxy}设置。`,
    seconds: '秒',
    passOn: `转发 ${legacyXForwarded}`,
    remove: `自动删除 ${legacyXForwarded}`,
};
