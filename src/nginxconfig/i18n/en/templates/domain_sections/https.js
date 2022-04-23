

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable} encrypted ${common.ssl} connections`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} ${common.http}/2 connections`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} ${common.http}/3 connections`,
    forceHttps: `Force ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable} Strict Transport Security, requiring HTTPS connections`,
    enableIncludeSubDomains: `${common.enable} includeSubDomains directive, requiring HTTPS connections for ALL subdomains`,
    enablePreload: `${common.enable} preload directive, telling browsers to always make HTTPS connections only`,
    certificationType: 'Certification type',
    customCertificate: 'Custom certificate',
    letsEncryptEmail: `${common.letsEncrypt} email`,
    http3IsANonStandardModule: 'HTTP/3 isn\'t a standard NGINX module, check the ',
    http3NginxQuicReadme: 'NGINX QUIC readme',
    http3OrThe: ' or the ',
    http3CloudflareQuicheProject: 'Cloudflare quiche project',
    http3ForBuildingNginxWithHttp3: ' for how to build NGINX with HTTP/3!',
};
