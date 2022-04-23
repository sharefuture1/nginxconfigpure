

export default (domain) => `php_${domain.server.domain.computed.replace(/\./g, '_')}`;
