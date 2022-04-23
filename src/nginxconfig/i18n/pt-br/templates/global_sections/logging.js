

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable} erro de arquivo não encontrado ao fazer login`,
    logformat: 'log_format',
    enableCloudflare: 'adicionar cabeçalhos de solicitação Cloudflare ao formato de log padrão',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
