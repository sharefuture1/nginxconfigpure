

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: 'Gere <b>chaves Diffie-Hellman</b> executando este comando em seu servidor:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `Crie um diretório comum <b>ACME-challenge</b> (para o <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `Nenhuma etapa adicional é necessária para configurar o ${common.ssl} para a sua configuração ${common.nginx}.`,
    sslInit: `${common.ssl} init`,
};
