

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable} el registro de error de archivo no encontrado`,
    logformat: 'log_format',
    enableCloudflare: 'agregar cabecera de petición de Cloudflare en el formato por defecto del registro',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
