

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable} verschlüsselte ${common.ssl} Verbindungen`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} ${common.http}/2 Verbindungen`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} ${common.http}/3 Verbindungen`,
    forceHttps: `Erzwinge ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable} Strict Transport Security, was HTTPS Verbindungen erzwingt`,
    enableIncludeSubDomains: `${common.enable} includeSubDomains Direktive, welche HTTPS Verbindungen auf ALLEN Subdomains erzwingt`,
    enablePreload: `${common.enable} preload Direktive, welche Browsern mitteilt, ausschließlich HTTPS Verbindungen zu verwenden`,
    certificationType: 'Zertifizierungsart',
    customCertificate: 'Eigenes Zertifikat',
    letsEncryptEmail: `${common.letsEncrypt} E-Mail`,
    http3IsANonStandardModule: 'HTTP/3 ist kein Standard NGINX Modul. Besuche das ',
    http3NginxQuicReadme: 'NGINX QUIC Readme',
    http3OrThe: ' oder das ',
    http3CloudflareQuicheProject: 'Cloudflare Quiche Project',
    http3ForBuildingNginxWithHttp3: ' für Informationen, wie man NGINX mit HTTP/3 verwendet!',
};
