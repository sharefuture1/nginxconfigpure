

import common from '../../common';

const mozilla = 'Mozilla';
const ipv4 = 'IPv4';
const ipv6 = 'IPv6';

export default {
    sslProfile: `${common.ssl}配置`,
    httpsMustBeEnabledOnOneSite: `必须在至少一个站点上启用${common.https}才能配置全局${common.https}设置。`,
    portReuse: '端口重用',
    enableReuseOfPort: `${common.enable} 重用端口 为每个 NGINX Worker 单独生成一个监听套接字`,
    ocspDnsResolvers: 'OCSP DNS解析器',
    cloudflareResolver: 'Cloudflare解析器',
    googlePublicDns: '谷歌公共DNS',
    openDns: 'OpenDNS',
    quad9: 'Quad9',
    verisign: 'Verisign',
    letsEncryptWebroot: `${common.letsEncrypt} Web根目录`,
    letsEncryptCertRoot: `${common.letsEncrypt}证书目录`,
    mozillaModern: `${mozilla} Modern`,
    mozillaIntermediate: `${mozilla} Intermediate`,
    mozillaOld: `${mozilla} Old`,
    ipv4Only: `${ipv4}`,
    ipv6Only: `${ipv6}`,
    ipv4AndIpv6: `${ipv4} & ${ipv6}`,
};
