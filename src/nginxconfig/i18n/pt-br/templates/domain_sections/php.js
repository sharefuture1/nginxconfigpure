
import common from '../../common';

export default {
    phpIsDisabled: `O ${common.php} está desabilitado.`,
    phpCannotBeEnabledWithReverseProxy: `O ${common.php} não pode ser habilitado enquanto o proxy reverso estiver habilitado.`,
    phpCannotBeEnabledWithPython: `O ${common.php} não pode ser habilitado enquanto o ${common.python} estiver habilitado.`,
    enablePhp: `${common.enable} ${common.php}`,
    wordPressRules: `Regras do ${common.wordPress}`,
    enableWordPressRules: `${common.enable} regras específicas do ${common.wordPress}`,
    drupalRules: `Regras do ${common.drupal}`,
    enableDrupalRules: `${common.enable} regras específicas do ${common.drupal}`,
    magentoRules: `Regras do ${common.magento}`,
    enableMagentoRules: `${common.enable} regras específicas do ${common.magento}`,
    joomlaRules: `Regras do ${common.joomla}`,
    enableJoomlaRules: `${common.enable} regras específicas do ${common.joomla}`,
    phpServer: `Servidor ${common.php}`,
    phpBackupServer: `Servidor de backup ${common.php}`,
    tcp: 'TCP',
    hhvmSocket: 'Socket HHVM',
    php5Socket: 'Socket 5.x',
    php70Socket: 'Socket 7.0',
    php71Socket: 'Socket 7.1',
    php72Socket: 'Socket 7.2',
    php73Socket: 'Socket 7.3',
    php74Socket: 'Socket 7.4',
    php80Socket: 'Socket 8.0',
    php81Socket: 'Socket 8.1',
    phpSocket: 'Socket PHP',
    custom: 'Custom', // TODO: translate
    disabled: 'Desabilitado',
};
