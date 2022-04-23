

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `${common.ssl} Профиль`,
    httpsMustBeEnabledOnOneSite: `${common.https} должен быть включен хотя бы на одном сайте, чтобы сконфигурировать глобальные ${common.https} настройки.`,
    portReuse: 'Reuseport',
    enableReuseOfPort: `${common.enable} reuseport чтобы создавать отдельный слушающий сокет для каждого рабочего процесса`,
    ocspDnsResolvers: 'OCSP DNS Преобразователи',
    cloudflareResolver: 'Cloudflare Преобразователь',
    googlePublicDns: 'Публичные Google DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `Директория ${common.letsEncrypt}`,
    letsEncryptCertRoot: `Директория сертификата ${common.letsEncrypt}`,
    mozillaModern: `${mozilla} Modern`,
    mozillaIntermediate: `${mozilla} Intermediate`,
    mozillaOld: `${mozilla} Old`,
    ipv4Only: `только ${ipv4}`,
    ipv6Only: `только ${ipv6}`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
