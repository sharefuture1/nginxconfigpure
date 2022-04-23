

export default global => {
    const config = {};

    config.proxy_http_version = '1.1';
    config.proxy_cache_bypass = '$http_upgrade';

    config['# Proxy headers'] = '';
    config['proxy_set_header Upgrade'] = '$http_upgrade';
    config['proxy_set_header Connection'] = '$connection_upgrade';
    config['proxy_set_header Host'] = '$host';
    config['proxy_set_header X-Real-IP'] = '$remote_addr';
    config['proxy_set_header Forwarded'] = '$proxy_add_forwarded';
    if (global.reverseProxy.proxyCoexistenceXForwarded.computed == 'passOn') {
        config['proxy_set_header X-Forwarded-For'] = '$proxy_add_x_forwarded_for';
        config['proxy_set_header X-Forwarded-Proto'] = '$scheme';
        config['proxy_set_header X-Forwarded-Host'] = '$host';
        config['proxy_set_header X-Forwarded-Port'] = '$server_port';
    } else {
        config['proxy_set_header X-Forwarded-For'] = '""';
        config['proxy_set_header X-Forwarded-Proto'] = '""';
        config['proxy_set_header X-Forwarded-Host'] = '""';
        config['proxy_set_header X-Forwarded-Port'] = '""';
    }
    

    config['# Proxy timeouts'] = '';
    config['proxy_connect_timeout'] = global.reverseProxy.proxyConnectTimeout.computed;
    config['proxy_send_timeout'] = global.reverseProxy.proxySendTimeout.computed;
    config['proxy_read_timeout'] = global.reverseProxy.proxyReadTimeout.computed;

    // Done!
    return config;
};
