

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable} зашифрованные ${common.ssl} соединения`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} ${common.http}/2 соединения`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} ${common.http}/3 соединения`,
    forceHttps: `Использовать только ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable} Strict Transport Security, требующая HTTPS соединения`,
    enableIncludeSubDomains: `${common.enable} includeSubDomains директиву, требующая HTTPS соединения для ВСЕХ поддоменов`,
    enablePreload: `${common.enable} preload директиву, указывающая браузерам всегда устанавливать только HTTPS-соединения`,
    certificationType: 'Тип сертификации',
    customCertificate: 'Другой сертификат',
    letsEncryptEmail: `${common.letsEncrypt} email`,
    http3IsANonStandardModule: 'HTTP/3 не является стандартным модулем NGINX, ознакомьтесь с ',
    http3NginxQuicReadme: 'readme NGINX QUIC',
    http3OrThe: ' или с ',
    http3CloudflareQuicheProject: 'проектом Cloudflare quiche',
    http3ForBuildingNginxWithHttp3: ' чтобы узнать как собрать NGINX с HTTP/3!',
};
