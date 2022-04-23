

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable} conexiones ${common.ssl} encriptadas`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} conexiones ${common.http}/2`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} conexiones ${common.http}/3`,
    forceHttps: `Forzar ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `Para ${common.enable} Strict Transport Security, requiriendo conexiones HTTPS`,
    enableIncludeSubDomains: `Para ${common.enable} la directiva includeSubDomains, requiriendo conexiones HTTPS para TODOS los subdominios`,
    enablePreload: `Para ${common.enable} la directiva directive, decirle a los navegadores que siempre hagan solo conexiones HTTPS`,
    certificationType: 'Tipo de certificado',
    customCertificate: 'Certificado personalizado',
    letsEncryptEmail: `Correo para ${common.letsEncrypt}`,
    http3IsANonStandardModule: 'HTTP/3 no es un modulo estandar de NGINX , verificar el ',
    http3NginxQuicReadme: 'Readme de NGINX QUIC',
    http3OrThe: ' o el ',
    http3CloudflareQuicheProject: 'Projecto quiche de Cloudflare',
    http3ForBuildingNginxWithHttp3: ' para saber como construir un NGINX con HTTP/3!',
};
