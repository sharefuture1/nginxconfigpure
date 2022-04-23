

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `${common.ssl} Profile`,
    httpsMustBeEnabledOnOneSite: `${common.https} must be enabled on at least one site to configure global ${common.https} settings.`,
    portReuse: 'Reuseport',
    enableReuseOfPort: `${common.enable} reuseport to generate a listening socket per worker`,
    ocspDnsResolvers: 'OCSP DNS Resolvers',
    cloudflareResolver: 'Cloudflare Resolver',
    googlePublicDns: 'Google Public DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `${common.letsEncrypt} webroot`,
    letsEncryptCertRoot: `${common.letsEncrypt} certificate directory`,
    mozillaModern: `${mozilla} Modern`,
    mozillaIntermediate: `${mozilla} Intermediate`,
    mozillaOld: `${mozilla} Old`,
    ipv4Only: `${ipv4} only`,
    ipv6Only: `${ipv6} only`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
