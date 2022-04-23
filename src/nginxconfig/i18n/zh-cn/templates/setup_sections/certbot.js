

import common from '../../common';

const certbot = 'Certbot';

export default {
    commentOutSslDirectivesInConfiguration: `注释掉配置中的${common.ssl}相关指令:`,
    reloadYourNginxServer: `重新加载你的${common.nginx}服务器:`,
    obtainSslCertificatesFromLetsEncrypt: `使用${certbot}从 ${common.letsEncrypt} 获得${common.ssl}证书:`,
    uncommentSslDirectivesInConfiguration: `在配置中取消注释${common.ssl}相关指令:`,
    configureCertbotToReloadNginxOnCertificateRenewal: `配置${certbot}，当${common.nginx}成功更新证书时重新加载:`,
    certbotDoesNotNeedToBeSetupForYourConfiguration: `${certbot}不需要为您的${common.nginx}配置进行设置。 `,
    certbot,
};
