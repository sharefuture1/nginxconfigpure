

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `Во время использования ${common.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> часто требуется в Content Security Policy, чтобы панель администратора работала исправно.`,
    security: 'Безопасность',
};
