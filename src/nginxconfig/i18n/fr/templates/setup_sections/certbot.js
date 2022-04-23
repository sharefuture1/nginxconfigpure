

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Commentez les directives relatives à ${common.ssl}:`,
    reloadYourNginxServer: `Relancez le serveur ${common.nginx}:`,
    obtainSslCertificatesFromLetsEncrypt: `Obtenez les certificats ${common.ssl} de ${common.letsEncrypt} à l'aide de ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Décommentez les directives relatives à ${common.ssl}:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Configurez ${certbot} pour relancer ${common.nginx} lors du renouvellement des certificats:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `Il est inutile de configurer ${certbot} pour votre configuration ${common.nginx}.`,
    certbot,
};
