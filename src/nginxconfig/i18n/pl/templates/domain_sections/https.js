

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable} szyfrowane połączenie ${common.ssl}`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} połączenia ${common.http}/2`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} połączenia ${common.http}/3`,
    forceHttps: `Wymuś ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable} Strict Transport Security, wymaga połaczenia HTTPS`,
    enableIncludeSubDomains: `${common.enable} dyrektywę includeSubDomains, wymaga połaczenia HTTPS dla WSZYSTKICH subdomen`,
    enablePreload: `${common.enable} dyrektywę preload, aby przekazać przeglądarce by wykonywała wyłącznie połączenia HTTPS`,
    certificationType: 'Typ certyfikacji',
    customCertificate: 'Własny certyfikat',
    letsEncryptEmail: `email ${common.letsEncrypt}`,
    http3IsANonStandardModule: 'HTTP/3 nie jest standardowym modułem NGINX, sprawdź ',
    http3NginxQuicReadme: 'NGINX QUIC readme',
    http3OrThe: ' lub ',
    http3CloudflareQuicheProject: 'Cloudflare quiche project',
    http3ForBuildingNginxWithHttp3: ' aby dowiedzieć się o NGINX z HTTP/3!',
};
