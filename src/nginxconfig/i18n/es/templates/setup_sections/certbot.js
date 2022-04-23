

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Comente las directivas relacionadas con ${common.ssl} en la configuración:`,
    reloadYourNginxServer: `Recargar el ${common.nginx}:`,
    obtainSslCertificatesFromLetsEncrypt: `Obtenga los certificados ${common.ssl} de ${common.letsEncrypt} usando ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Comente las directivas relacionadas con ${common.ssl} en la configuración:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Configure ${certbot} para recargar ${common.nginx} cuando renueve los certificados exitosamente:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot} no es necesario configurarlo para su configuracion de ${common.nginx}.`,
    certbot,
};
