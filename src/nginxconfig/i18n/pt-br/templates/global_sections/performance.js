

import common from '../../common';

export default {
    gzipCompression: 'Compressão Gzip',
    enableGzipCompression: `${common.enable} compressão gzip`,
    brotliCompression: 'Compressão Brotli',
    enableBrotliCompression: `${common.enable} compressão brotli`,
    brotliIsANonStandardModule: 'Brotli isn\'t a standard NGINX module, check the ', // TODO: translate
    brotliGoogleNgxBrotliProject: 'Google ngx_brotli project', // TODO: translate
    brotliForBuildingNginxWithBrotli: ' for how to build NGINX with Brotli!', // TODO: translate
    expirationForAssets: 'Expiração de ativos',
    expirationForMedia: 'Expiração de mídia',
    expirationForSvgs: 'Expiração de SVGs',
    expirationForFonts: 'Expiração de fontes',
    performance: 'Desempenho',
};
