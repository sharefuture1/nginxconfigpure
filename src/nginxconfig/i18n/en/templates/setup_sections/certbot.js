

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Comment out ${common.ssl} related directives in the configuration:`,
    reloadYourNginxServer: `Reload your ${common.nginx} server:`,
    obtainSslCertificatesFromLetsEncrypt: `Obtain ${common.ssl} certificates from ${common.letsEncrypt} using ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Uncomment ${common.ssl} related directives in the configuration:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Configure ${certbot} to reload ${common.nginx} when it successfully renews certificates:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot} does not need to be set up for your ${common.nginx} configuration.`,
    certbot,
};
