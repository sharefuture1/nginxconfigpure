

import common from '../../common';

export default {
    enableEncryptedSslConnection: `${common.enable}加密的${common.ssl}連接`,
    http2: `${common.http}/2`,
    enableHttp2Connections: `${common.enable} ${common.http}/2 連接`,
    http3: `${common.http}/3`,
    enableHttp3Connections: `${common.enable} ${common.http}/3 連接`,
    forceHttps: `強制 ${common.https}`,
    hsts: 'HSTS',
    enableStrictTransportSecurity: `${common.enable}HSTS（強制用戶端、瀏覽器等使用HTTPS與伺服器建立連結），需要HTTPS連接`,
    enableIncludeSubDomains: `${common.enable}includeSubDomains指令，HSTS對所有子域生效`,
    enablePreload: `${common.enable}preload指令，強制用戶端只可以使用https連接`,
    certificationType: '證書類型',
    customCertificate: '本地證書',
    letsEncryptEmail: `${common.letsEncrypt} 郵箱`,
    http3IsANonStandardModule: 'HTTP/3 並不是標準的 NGINX 模組, 請查看 ',
    http3NginxQuicReadme: 'NGINX QUIC 說明',
    http3OrThe: ' 或者 ', 
    http3CloudflareQuicheProject: 'Cloudflare quiche 項目',
    http3ForBuildingNginxWithHttp3: ' 來構建支援 HTTP/3 的 NGINX !',
};
