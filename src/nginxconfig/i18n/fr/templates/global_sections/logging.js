

import common from '../../common';

export default {
    enableFileNotFoundErrorLogging: `${common.enable} les erreurs de fichiers introuvables lors de la journalisation`,
    logformat: 'log_format',
    enableCloudflare: 'ajouter les en-têtes de requête CloudFlare au format de journal par défaut',
    cfRay: 'CF-Ray',
    cfConnectingIp: 'CF-Connecting-IP',
    xForwardedFor: 'X-Forwarded-For',
    xForwardedProto: 'X-Forwarded-Proto',
    trueClientIp: 'True-Client-IP',
    cfIpCountry: 'CF-IPCountry',
    cfVisitor: 'CF-Visitor',
    cdnLoop: 'CDN-Loop',
};
