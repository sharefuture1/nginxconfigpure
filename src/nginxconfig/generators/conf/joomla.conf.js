

export default () => {
    const config = {};

    config['# Joomla: deny running scripts inside writable directories'] = '';
    config['location ~* /(images|cache|media|logs|tmp)/.*\\.(php|pl|py|jsp|asp|sh|cgi)$'] = {
        return: '403',
        error_page: '403 /403_error.html',
    };

    config['# Joomla: caching of files'] = '';
    config['location ~* \\.(ico|pdf|flv)$'] = {
        expires: '1y',
    };

    config['# Joomla: caching of files'] = '';
    config['location ~* \\.(js|css|png|jpg|jpeg|gif|swf|xml|txt)$'] = {
        expires: '14d',
    };


    // Done!
    return config;
};
