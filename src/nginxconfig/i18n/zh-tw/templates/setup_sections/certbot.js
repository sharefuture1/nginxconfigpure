

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `註解掉配置中的${common.ssl}相關指令:`,
    reloadYourNginxServer: `重新載入你的${common.nginx}伺服器:`,
    obtainSslCertificatesFromLetsEncrypt: `使用${certbot}從${common.letsEncrypt}取得${common.ssl}證書:`,
    uncommentSslDirectivesInConfiguration: `在配置中取消註解${common.ssl}相關指令:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `配置${certbot}，當${common.nginx}成功更新證書時重新載入:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot}不需要為您的${common.nginx}配置進行設定。 `,
    certbot,
};
