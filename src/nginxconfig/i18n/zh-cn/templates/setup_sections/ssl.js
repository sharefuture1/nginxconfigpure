

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: '在您的服务器上运行此命令生成<b>Diffie-Hellman keys</b>:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `创建一个通用的<b>ACME-challenge</b>目录(用于 <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `无需任何操作，即可为您的${common.nginx}完成${common.ssl}配置`,
    sslInit: `${common.ssl} 初始化`,
};
