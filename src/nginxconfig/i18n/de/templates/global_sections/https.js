

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `${common.ssl} Profil`,
    httpsMustBeEnabledOnOneSite: `${common.https} muss auf mindestes einer Webseite aktiviert sein, um globale ${common.https} Einstellungen zu konfigurieren.`,
    portReuse: 'Reuseport',
    enableReuseOfPort: `${common.enable} Reuseport um einen Socket pro Worker zu generieren`,
    ocspDnsResolvers: 'OCSP DNS Resolver',
    cloudflareResolver: 'Cloudflare Resolver',
    googlePublicDns: 'Google Public DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `${common.letsEncrypt} Web-Root`,
    letsEncryptCertRoot: `${common.letsEncrypt} Zertifikats-Verzeichnis`,
    mozillaModern: `${mozilla} Modern`,
    mozillaIntermediate: `${mozilla} Intermediate`,
    mozillaOld: `${mozilla} Old`,
    ipv4Only: `nur ${ipv4}`,
    ipv6Only: `nur ${ipv6}`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
