

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: '在您的伺服器上運行此命令生成<b>Diffie-Hellman keys</b>:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `創建一個通用的<b>ACME-challenge</b>目錄（用於 <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `無需任何操作，即可為您的${common.nginx}完成${common.ssl}配置`,
    sslInit: `${common.ssl} 初始化`,
};
