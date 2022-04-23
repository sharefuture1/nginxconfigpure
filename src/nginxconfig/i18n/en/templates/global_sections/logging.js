

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable} file not found error logging in`,
    logformat: 'log_format',
    enableCloudflare: 'add Cloudflare request headers to the default log format',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
