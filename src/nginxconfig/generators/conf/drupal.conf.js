

export default global => {
    const config = {};

    config['# Drupal: deny private files'] = '';
    config['location ~ ((^|/)\\.|^.*\\.yml$|^/sites/.*/private/|^/sites/[^/]+/[^/]*settings.*\\.php$)'] = {
        deny: 'all',
        return: '404',
    };

    config['# Drupal: deny php in files'] = '';
    config['location ~ ^/sites/[^/]+/files/.*\\.php$'] = {
        deny: 'all',
    };

    config['# Drupal: deny php in vendor'] = '';
    config['location ~ /vendor/.*\\.php$'] = {
        deny: 'all',
    };

    config['# Drupal: allow image styles to be handled by the CMS'] = '';
    config['location ~ ^/sites/[^/]+/files/styles/'] = {
        try_files: '$uri /index.php?q=$uri&$args',
    };

    config['# Drupal: handle private files'] = '';
    config['location ~ ^(/[a-z\\-]+)?/system/files/'] = {
        try_files: '$uri /index.php?$query_string',
    };

    if (global.security.limitReq.computed) {
        config['# Drupal: throttle user functions'] = '';
        config['location ~ ^/user/(?:login|register|password)'] = {
            limit_req: 'zone=login burst=2 nodelay',
            try_files: '$uri /index.php?$query_string',
        };
    }

    // Done!
    return config;
};
