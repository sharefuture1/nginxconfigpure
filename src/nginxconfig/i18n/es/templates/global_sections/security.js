

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `Cuando usan ${common.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> es usualmente requerido en el Content Security Policy para permitir que el panel de administrador funcione correctamente.`,
    security: 'Seguridad',
};
