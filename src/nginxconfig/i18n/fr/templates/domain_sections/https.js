

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable} les connexions ${common.ssl}`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} les connexions ${common.http}/2`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} les connexions ${common.http}/3`,
    forceHttps: `Forcer ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable} Strict Transport Security, exigeant HTTPS`,
    enableIncludeSubDomains: `${common.enable} la directive includeSubDomains, exigeant une connexion HTTPS pour tous les sous-domaines.`,
    enablePreload: `${common.enable} la directive de préchargement, indiquant aux navigateurs de toujours utiliser une connexion HTTPS`,
    certificationType: 'Type de certification',
    customCertificate: 'Certificat personnalisé',
    letsEncryptEmail: `E-mail ${common.letsEncrypt}`,
    http3IsANonStandardModule: 'HTTP/3 n\'est pas un module standard de NGINX, veuillez lire ',
    http3NginxQuicReadme: 'le Readme de NGINX QUIC',
    http3OrThe: ' ou le ',
    http3CloudflareQuicheProject: 'projet Cloudflare quiche',
    http3ForBuildingNginxWithHttp3: ' pour compiler NGINX avec le support HTTP/3!',
};
