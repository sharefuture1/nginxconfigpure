

import common from '../../common';

export default {
    gzipCompression: 'Gzip сжатие',
    enableGzipCompression: `${common.enable} gzip сжатие`,
    brotliCompression: 'Brotli сжатие',
    enableBrotliCompression: `${common.enable} brotli сжатие`,
    brotliIsANonStandardModule: 'Brotli isn\'t a standard NGINX module, check the ', // TODO: translate
    brotliGoogleNgxBrotliProject: 'Google ngx_brotli project', // TODO: translate
    brotliForBuildingNginxWithBrotli: ' for how to build NGINX with Brotli!', // TODO: translate
    expirationForAssets: 'Истечение срока для ассетов',
    expirationForMedia: 'Истечение срока для медиа файлов',
    expirationForSvgs: 'Истечение срока для SVG файлов',
    expirationForFonts: 'Истечение срока для шрифтов',
    performance: 'Производительность',
};
