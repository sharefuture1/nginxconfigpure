

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `${common.ssl}配置`,
    httpsMustBeEnabledOnOneSite: `必須在至少一個網站上啟用${common.https}才能配置全域${common.https}設定。`,
    portReuse: '連接埠複用',
    enableReuseOfPort: `${common.enable} 連接埠複用來為每個worker生成監聽套接字`,
    ocspDnsResolvers: 'OCSP DNS解析器',
    cloudflareResolver: 'Cloudflare解析器',
    googlePublicDns: '穀歌公共DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `${common.letsEncrypt} Web根目錄`,
    letsEncryptCertRoot: `${common.letsEncrypt}證書目錄`,
    mozillaModern: `${mozilla} Modern`,
    mozillaIntermediate: `${mozilla} Intermediate`,
    mozillaOld: `${mozilla} Old`,
    ipv4Only: `${ipv4}`,
    ipv6Only: `${ipv6}`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
