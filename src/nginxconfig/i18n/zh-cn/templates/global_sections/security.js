

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `当使用${common.wordPress}时，<code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> 通常需要置于内容安全策略中，以确保管理面板的正常运行。`,
    security: '安全',
};
