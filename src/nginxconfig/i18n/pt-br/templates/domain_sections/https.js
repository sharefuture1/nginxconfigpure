

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable} conexões ${common.ssl} criptografadas`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} conexões ${common.http}/2`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} conexões ${common.http}/3`,
    forceHttps: `Forçar ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable} Strict Transport Security, requerendo conexões HTTPS`,
    enableIncludeSubDomains: `${common.enable} a diretiva includeSubDomains, requerendo conexões HTTPS para TODOS os subdomínios`,
    enablePreload: `${common.enable} a diretiva preload, dizendo aos navegadores para sempre fazer conexões HTTPS apenas`,
    certificationType: 'Tipo de certificação',
    customCertificate: 'Certificado personalizado',
    letsEncryptEmail: `E-mail do ${common.letsEncrypt}`,
    http3IsANonStandardModule: 'HTTP/3 isn\'t a standard NGINX module, check the ', // TODO: translate
    http3NginxQuicReadme: 'NGINX QUIC readme', // TODO: translate
    http3OrThe: ' or the ', // TODO: translate
    http3CloudflareQuicheProject: 'Cloudflare quiche project', // TODO: translate
    http3ForBuildingNginxWithHttp3: ' for how to build NGINX with HTTP/3!', // TODO: translate
};
