

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';


// 'Resolvers', 'webroot', 'listening socket' and 'worker' don't have a good translation in Spanish

export default {
    sslProfile: `Perfil ${common.ssl}`,
    httpsMustBeEnabledOnOneSite: `${common.https} debe estar habilitado en al menos un sitio para modificar globalmente la configuracion ${common.https}.`,
    portReuse: 'Reuseport',
    enableReuseOfPort: `${common.enable} reuseport para generar un "listening socket" por "worker"`,
    ocspDnsResolvers: 'OCSP DNS Resolvers',
    cloudflareResolver: 'Cloudflare Resolver',
    googlePublicDns: 'Google Public DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `${common.letsEncrypt} webroot`,
    letsEncryptCertRoot: `directorio del certificado ${common.letsEncrypt}`,
    mozillaModern: `${mozilla} Moderno`,
    mozillaIntermediate: `${mozilla} Intermedio`,
    mozillaOld: `${mozilla} Antiguo`,
    ipv4Only: `solo ${ipv4}`,
    ipv6Only: `solo ${ipv6}`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
