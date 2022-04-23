
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import WebpackRequireFrom from 'webpack-require-from';
import { URL, fileURLToPath } from 'url';

export default {
    publicPath: './',
    outputDir: 'dist',
    filenameHashing: false, // Don't hash the output, so we can embed on the DigitalOcean Community
    productionSourceMap: false,
    devServer: {
        historyApiFallback: false, // Don't serve index.html for 404s in dev
    },
    configureWebpack: {
        node: false, // Disable Node.js polyfills (Buffer etc.) -- This will be default in Webpack 5
        plugins: [
            // Fix dynamic imports from CDN (inject as first entry point before any imports can happen)
            { apply: compiler => {
                compiler.options.entry.app.import.unshift(
                    fileURLToPath(new URL('src/nginxconfig/build/webpack-dynamic-import.js', import.meta.url)),
                );
            } },
            new WebpackRequireFrom({ methodName: '__webpackDynamicImportURL', suppressErrors: true }),
            // Pass the env in for logging
            new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
            // Analyze the bundle
            new BundleAnalyzerPlugin({ analyzerMode: 'static', openAnalyzer: false }),
            new DuplicatePackageCheckerPlugin(),
        ],
    },
    chainWebpack: config => {
        // Inject resolve-url-loader into the SCSS loader rules (to allow relative fonts in do-bulma to work)
        for (const rule of ['vue-modules', 'vue', 'normal-modules', 'normal']) {
            config.module.rule('scss')
                .oneOf(rule)
                .use('resolve-url-loader')
                .loader('resolve-url-loader')
                .before('sass-loader')
                .end()
                .use('sass-loader')
                .loader('sass-loader')
                .tap(options => ({ ...options, sourceMap: true }));
        }

        // Use a custom HTML template
        config.plugin('html').tap(options => {
            options[0].template = fileURLToPath(new URL('build/index.html', import.meta.url));
            return options;
        });
    },
};
