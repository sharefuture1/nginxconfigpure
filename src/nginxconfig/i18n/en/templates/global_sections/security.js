

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `When using ${common.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> is often required in the Content Security Policy to allow the admin panel to function correctly.`,
    security: 'Security',
};
