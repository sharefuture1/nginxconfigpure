

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `Bei der Verwendung von ${common.wordPress} ist es oft nötig, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> in die Content Security Policy aufzunehmen, damit der Admin-Bereich korrekt funktioniert.`,
    security: 'Security',
};
