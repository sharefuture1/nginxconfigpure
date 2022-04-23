

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable} logowanie błędów o nieznalezionych plikach`,
    logformat: 'log_format',
    enableCloudflare: 'dodaj nagłówki żądań Cloudflare do domyślnego formatu dziennika ',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
