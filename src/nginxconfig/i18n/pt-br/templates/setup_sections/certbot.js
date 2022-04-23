

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Comente as diretivas relacionadas ao ${common.ssl} na configuração:`,
    reloadYourNginxServer: `Recarregue seu servidor ${common.nginx}:`,
    obtainSslCertificatesFromLetsEncrypt: `Obtenha certificados ${common.ssl} de ${common.letsEncrypt} usando o ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Descomente as diretivas relacionadas ao ${common.ssl} na configuração:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Configure o ${certbot} para recarregar o ${common.nginx} quando ele renovar certificados com sucesso:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `O ${certbot} não precisa ser definido para sua configuração ${common.nginx}.`,
    certbot,
};
