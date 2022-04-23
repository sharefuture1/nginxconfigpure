

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable} логирование ошибок для файлов, которые не были найдены при запросе`,
    logformat: 'log_format',
    enableCloudflare: 'добавить Cloudflare хедеры запроса в дефолтный формат логов',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
