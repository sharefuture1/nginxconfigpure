

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: 'Genera <b> llaves Diffie-Hellman</b> ejecutando este comando en su servidor:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `Crear una simple carpeta <b>ACME-challenge</b> (para <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `No se necesitan pasos adicionales para configurar ${common.ssl} en tu configuracion de ${common.nginx}.`,
    sslInit: `Preparar el ${common.ssl}`,
};
