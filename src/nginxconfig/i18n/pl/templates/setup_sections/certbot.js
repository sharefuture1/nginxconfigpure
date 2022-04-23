

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Zakomentuj dyrektywy związane z ${common.ssl} w pliku konfiguracyjnym:`,
    reloadYourNginxServer: `Przeładuj usługę ${common.nginx}:`,
    obtainSslCertificatesFromLetsEncrypt: `Uzysjak certyfikat ${common.ssl} od ${common.letsEncrypt} za pomocą ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Odkomentuj dyrektywy związane z ${common.ssl} w pliku konfiguracyjnym:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Skonfiguruj ${certbot} aby przeładował ${common.nginx} kiedy poprawnie odnowi certyfikat:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot} nie musi być skonfigurowany dla Twojej konfiguracji ${common.nginx}.`,
    certbot,
};
