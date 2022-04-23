

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `Закомментируйте директивы, связанные с ${common.ssl} в конфигурации:`,
    reloadYourNginxServer: `Перезагрузите свой ${common.nginx} сервер:`,
    obtainSslCertificatesFromLetsEncrypt: `Получите ${common.ssl} сертификат ${common.letsEncrypt} используя ${certbot}:`,
    uncommentSslDirectivesInConfiguration: `Раскомментируйте директивы, связанные с ${common.ssl} в конфигурации:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `Настройте ${certbot}, чтобы перезагрузить ${common.nginx}, когда сертификаты успешно обновятся:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot} не нужно настраивать для вашей ${common.nginx} конфигурации.`,
    certbot,
};
