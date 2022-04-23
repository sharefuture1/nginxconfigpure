

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: 'Сгенерируйте <b>ключи Диффи-Хеллмана</b>, запустив следующую команду на своем сервере:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `Создайте директорию хранения <b>ACME-challenge</b> (для <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `Больше ничего не требуется, чтобы настроить ${common.ssl} в Вашей ${common.nginx} конфигурации.`,
    sslInit: `${common.ssl} init`,
};
