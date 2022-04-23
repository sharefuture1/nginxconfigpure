

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `Profil ${common.ssl}`,
    httpsMustBeEnabledOnOneSite: `${common.https} doit être activé sur au moins un site pour configurer les paramètres ${common.https} globaux.`,
    portReuse: 'Reuseport',
    enableReuseOfPort: `${common.enable} reuseport pour générer un socket passif par worker`,
    ocspDnsResolvers: 'Résolveur DNS OCSP',
    cloudflareResolver: 'Résolveur Cloudflare',
    googlePublicDns: 'Google Public DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `${common.letsEncrypt} dossier racine`,
    letsEncryptCertRoot: `Dossier du certificat ${common.letsEncrypt}`,
    mozillaModern: `${mozilla} Moderne`,
    mozillaIntermediate: `${mozilla} Intermédiaire`,
    mozillaOld: `${mozilla} Ancien`,
    ipv4Only: `${ipv4} seulement`,
    ipv6Only: `${ipv6} seulement`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
