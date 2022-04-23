

import common from '../../common';

export default {
    whenUsingWordPressUnsafeEvalIsOftenRequiredToAllowFunctionality: `Lors de l'utilisation de ${common.wordPress}, <code class="slim">script-src 'self' 'unsafe-inline' 'unsafe-eval';</code> est fréquemment exigé par la Politique de Sécurité du Contenu pour assurer le bon fonctionnement du panneau d'administration.`,
    security: 'Sécurité',
};
