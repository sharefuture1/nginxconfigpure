

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `Profil ${common.ssl}`,
    httpsMustBeEnabledOnOneSite: `${common.https} musi być włączony na conajmniej jednej stronie, aby móc zastosować globalną konfigurację ${common.https}.`,
    portReuse: 'Reuseport',
    enableReuseOfPort: `${common.enable} reuseport aby generować listening socket per worker`,
    ocspDnsResolvers: 'OCSP DNS Resolvers',
    cloudflareResolver: 'Cloudflare Resolver',
    googlePublicDns: 'Google Public DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `${common.letsEncrypt} webroot`,
    letsEncryptCertRoot: `ścieżka certyfikatów ${common.letsEncrypt}`,
    mozillaModern: `${mozilla} Modern`,
    mozillaIntermediate: `${mozilla} Intermediate`,
    mozillaOld: `${mozilla} Old`,
    ipv4Only: `tylko ${ipv4}`,
    ipv6Only: `tylko ${ipv6}`,
    ipv4AndIpv6: `${ipv4} oraz ${ipv6}`,
};
