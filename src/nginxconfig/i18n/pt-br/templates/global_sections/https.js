

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `Perfil ${common.ssl}`,
    httpsMustBeEnabledOnOneSite: `O ${common.https} deve estar habilitado em pelo menos um site para definir as configurações globais de ${common.https}.`,
    portReuse: 'Reuseport', // TODO: translate
    enableReuseOfPort: `${common.enable} reuseport to generate a listening socket per worker`, // TODO: translate
    ocspDnsResolvers: 'Resolvedores de DNS OCSP',
    cloudflareResolver: 'Resolvedor Cloudflare',
    googlePublicDns: 'DNS público do Google',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `Diretório raiz do ${common.letsEncrypt}`,
    letsEncryptCertRoot: `Diretório de certificado do ${common.letsEncrypt}`,
    mozillaModern: `${mozilla} Modern`,
    mozillaIntermediate: `${mozilla} Intermediate`,
    mozillaOld: `${mozilla} Old`,
    ipv4Only: `${ipv4} apenas`,
    ipv6Only: `${ipv6} apenas`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
