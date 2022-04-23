

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: 'Générez des <b>clefs de Diffie-Hellman</b> en exécutant cette commande sur votre serveur:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `Créez un répertoire commun <b>ACME-challenge</b> (pour <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `Aucune étape additionnelle n'est nécessaire pour configurer ${common.ssl} pour ${common.nginx}.`,
    sslInit: `${common.ssl} init`,
};
