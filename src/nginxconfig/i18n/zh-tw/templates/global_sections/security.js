

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `當使用${common.wordPress}時, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code>經常需要在內容安全策略中，以允許管理面板的功能正確。`,
    security: '安全',
};
