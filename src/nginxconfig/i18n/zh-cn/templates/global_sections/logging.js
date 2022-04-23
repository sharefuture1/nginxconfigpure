

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable}“文件未找到”错误日志：`,
    logformat: 'log_format',
    enableCloudflare: '将Cloudflare请求头部添加到默认日志格式',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
