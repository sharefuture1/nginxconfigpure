

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: 'Generate <b>Diffie-Hellman keys</b> by running this command on your server:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `Create a common <b>ACME-challenge</b> directory (for <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `No additional steps are needed to set up ${common.ssl} for your ${common.nginx} configuration.`,
    sslInit: `${common.ssl} init`,
};
