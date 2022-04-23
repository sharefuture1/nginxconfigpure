

import toConf from './to_conf';
import toYaml from './to_yaml';
import nginxConf from './conf/nginx.conf';
import websiteConf from './conf/website.conf';
import letsEncryptConf from './conf/letsencrypt.conf';
import securityConf from './conf/security.conf';
import generalConf from './conf/general.conf';
import phpConf from './conf/php_fastcgi.conf';
import pythonConf from './conf/python_uwsgi.conf';
import proxyConf from './conf/proxy.conf';
import wordPressConf from './conf/wordpress.conf';
import drupalConf from './conf/drupal.conf';
import magentoConf from './conf/magento.conf';
import joomlaConf from './conf/joomla.conf';
import dockerComposeYaml from './yaml/dockerCompose.yaml';
import dockerConf from './ext/docker';

export default (domains, global) => {
    const files = {};

    // Base nginx config
    files['nginx.conf'] = toConf(nginxConf(domains, global));

    // Dockerfile
    if (global.docker.dockerfile.computed)
        files['Dockerfile'] = dockerConf();

    if (global.docker.dockerCompose.computed)
        files['docker-compose.yaml'] = toYaml(dockerComposeYaml());

    // Modularised configs
    if (global.tools.modularizedStructure.computed) {
        // Domain config
        const sitesDir = `sites-${global.tools.symlinkVhost.computed ? 'available' : 'enabled'}`;
        const ipPortPairs = new Set();
        for (const domain of domains) {
            files[`${sitesDir}/${domain.server.domain.computed}.conf`] = toConf(websiteConf(domain, domains, global, ipPortPairs));
        }

        // Let's encrypt
        if (domains.some(d => d.https.certType.computed === 'letsEncrypt'))
            files['nginxconfig.io/letsencrypt.conf'] = toConf(letsEncryptConf(global));

        // Security
        files['nginxconfig.io/security.conf'] = toConf(securityConf(domains, global));

        // General
        files['nginxconfig.io/general.conf'] = toConf(generalConf(domains, global));

        // PHP
        if (domains.some(d => d.php.php.computed))
            files['nginxconfig.io/php_fastcgi.conf'] = toConf(phpConf(domains));

        // Python
        if (domains.some(d => d.python.python.computed))
            files['nginxconfig.io/python_uwsgi.conf'] = toConf(pythonConf(global));

        // Reverse proxy
        if (domains.some(d => d.reverseProxy.reverseProxy.computed))
            files['nginxconfig.io/proxy.conf'] = toConf(proxyConf(global));

        // WordPress
        if (domains.some(d => d.php.wordPressRules.computed))
            files['nginxconfig.io/wordpress.conf'] = toConf(wordPressConf(global));

        // Drupal
        if (domains.some(d => d.php.drupalRules.computed))
            files['nginxconfig.io/drupal.conf'] = toConf(drupalConf(global));

        // Magento
        if (domains.some(d => d.php.magentoRules.computed))
            files['nginxconfig.io/magento.conf'] = toConf(magentoConf());

        // Joomla
        if (domains.some(d => d.php.joomlaRules.computed))
            files['nginxconfig.io/joomla.conf'] = toConf(joomlaConf());

    } else {
        // PHP
        if (domains.some(d => d.php.wordPressRules.computed))
            files['nginxconfig.io/php_fastcgi.conf'] = toConf(phpConf(domains));
    }

    return files;
};
