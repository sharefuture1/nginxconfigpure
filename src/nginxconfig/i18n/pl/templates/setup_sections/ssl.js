

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: 'Wygeneruj <b>klucze Diffie-Hellman</b> uruchamiając te komendę na swoim serwerze:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `Utwórz powszechny katalog <b>ACME-challenge</b> (dla <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `Nie potrzeba żadnych dodatkowych kroków dla ${common.ssl} w Twojej konfiguracji ${common.nginx}.`,
    sslInit: `${common.ssl} init`,
};
