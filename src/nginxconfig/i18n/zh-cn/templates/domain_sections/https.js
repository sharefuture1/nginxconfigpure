

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable}加密的${common.ssl}连接`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} ${common.http}/2 连接`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} ${common.http}/3 连接`,
    forceHttps: `强制 ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable}HSTS（强制客户端、浏览器等使用 HTTPS 与服务器创建链接），需要HTTPS连接`,
    enableIncludeSubDomains: `${common.enable}includeSubDomains指令，HSTS对所有子域生效`,
    enablePreload: `${common.enable}preload指令, 强制客户端只可以使用https连接`,
    certificationType: '证书类型',
    customCertificate: '本地证书',
    letsEncryptEmail: `${common.letsEncrypt} 邮箱`,
    http3IsANonStandardModule: 'HTTP/3 并不是一个标准的 NGINX 模块, 请查看 ',
    http3NginxQuicReadme: 'NGINX QUIC 使用文档',
    http3OrThe: ' 或者 ',
    http3CloudflareQuicheProject: 'Cloudflare quiche 项目',
    http3ForBuildingNginxWithHttp3: ' 以构建支持 HTTP/3 的 NGINX!',
};
