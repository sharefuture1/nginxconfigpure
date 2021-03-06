
import common from '../../common';

export default {
    phpIsDisabled: `${common.php} est désactivé.`,
    phpCannotBeEnabledWithReverseProxy: `${common.php} ne peut pas être activé en même temps que le ${common.reverseProxyLower}.`,
    phpCannotBeEnabledWithPython: `${common.php} ne peut pas être activé en même temps que ${common.python}.`,
    enablePhp: `${common.enable} ${common.php}`,
    wordPressRules: `Règles ${common.wordPress}`,
    enableWordPressRules: `${common.enable} les règles spécifiques à ${common.wordPress}`,
    drupalRules: `Règles ${common.drupal}`,
    enableDrupalRules: `${common.enable} les règles spécifiques à ${common.drupal}`,
    magentoRules: `Règles ${common.magento}`,
    enableMagentoRules: `${common.enable} les règles spécifiques à ${common.magento}`,
    joomlaRules: `Règles ${common.joomla}`,
    enableJoomlaRules: `${common.enable} les règles spécifiques à ${common.joomla}`,
    phpServer: `Serveur ${common.php}`,
    phpBackupServer: `Serveur de sauvegarde ${common.php}`,
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
    custom: 'Custom',
    disabled: 'Désactivé',
};
