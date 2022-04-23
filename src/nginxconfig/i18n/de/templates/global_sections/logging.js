

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable} "Seite nicht gefunden" Error Logging in`,
    logformat: 'log_format',
    enableCloudflare: 'Füge Cloudflare Anfrage-Header dem Standard Log-Format hinzu',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
