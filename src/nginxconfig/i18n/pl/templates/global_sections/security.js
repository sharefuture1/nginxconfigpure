

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `Korzystając z ${common.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> jest często wymagany w Content Security Policy aby panel administracyjny działał poprawnie.`,
    security: 'Bezpieczeństwo',
};
