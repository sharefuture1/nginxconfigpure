

import common from '../../common';

const legacyXForwarded = '傳統 X-Forwarded-* 標頭';

export default {
    reverseProxyMustBeEnabledOnOneSite: `必須在至少一個網站上啟用${common.reverseProxy}才能配置全域${common.reverseProxy}設定。`,
    seconds: '秒',
    passOn: `轉發 ${legacyXForwarded} `,
    remove: `主動刪除 ${legacyXForwarded}`,
};
