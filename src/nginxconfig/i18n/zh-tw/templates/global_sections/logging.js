

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable}“檔案未找到”錯誤日誌：`,
    logformat: 'log_format',
    enableCloudflare: '將Cloudflare請求頭部添加到預設日誌格式',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
