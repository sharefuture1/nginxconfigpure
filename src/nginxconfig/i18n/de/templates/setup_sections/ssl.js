

import common from '../../common';

export default {
    generateDiffieHellmanKeysByRunningThisCommandOnYourServer: 'Erzeuge <b>Diffie-Hellman Schlüssel</b> indem du diesen Befehl auf deinem Server ausführst:',
    createACommonAcmeChallengeDirectoryForLetsEncrypt: `Erstelle ein <b>ACME-Challenge</b> Verzeichnis (für <b>${common.letsEncrypt}</b>):`,
    noAdditionalStepsAreNeededToSetUpSslForNginx: `Es sind keine weiteren Schritte nötig, um ${common.ssl} für deine ${common.nginx} Konfiguration einzurichten.`,
    sslInit: `${common.ssl} initialisieren`,
};
