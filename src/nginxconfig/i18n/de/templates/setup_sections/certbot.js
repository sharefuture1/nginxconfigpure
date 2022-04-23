

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Kommentiere ${common.ssl}-relevante Direktiven in deiner Konfiguration aus:`,
    reloadYourNginxServer: `Führe einen reload deines ${common.nginx} Server aus:`,
    obtainSslCertificatesFromLetsEncrypt: `Erhalte ${common.ssl} Zertifikate von ${common.letsEncrypt} mittels ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Kommentiere ${common.ssl}-relevante Direktiven in deiner Konfiguration ein:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Konfiguriere ${certbot} um ${common.nginx} neu zu laden, wenn die Zertifikate erfolgreich erneuert wurden:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot} muss für deine ${common.nginx} Konfiguration nicht eingerichtet werden.`,
    certbot,
};
