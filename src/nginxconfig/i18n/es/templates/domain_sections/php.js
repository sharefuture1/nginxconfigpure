
import common from '../../common';

export default {
    phpIsDisabled: `${common.php} esta desactivado.`,
    phpCannotBeEnabledWithReverseProxy: `${common.php} no se puede habilitar mientras el proxy inverso está habilitado.`,
    phpCannotBeEnabledWithPython: `${common.php} no se puede habilitar mientras ${common.python} está habilitado.`,
    enablePhp: `${common.enable} ${common.php}`,
    wordPressRules: `Reglas de ${common.wordPress}`,
    enableWordPressRules: `${common.enable} reglas especificas de ${common.wordPress}`,
    drupalRules: `Reglas de ${common.drupal}`,
    enableDrupalRules: `${common.enable} reglas especificas de ${common.drupal}`,
    magentoRules: `Reglas de ${common.magento}`,
    enableMagentoRules: `${common.enable} reglas especificas de ${common.magento}`,
    joomlaRules: `Reglas de ${common.joomla}`,
    enableJoomlaRules: `${common.enable} reglas especificas de ${common.joomla}`,
    phpServer: `Servidor ${common.php}`,
    phpBackupServer: `Servidor ${common.php} de respaldo`,
    tcp: 'TCP',
    hhvmSocket: 'HHVM socket',
    php5Socket: '5.x socket',
    php70Socket: '7.0 socket',
    php71Socket: '7.1 socket',
    php72Socket: '7.2 socket',
    php73Socket: '7.3 socket',
    php74Socket: '7.4 socket',
    php80Socket: '8.0 socket',
    php81Socket: '8.1 socket',
    phpSocket: 'PHP socket',
    custom: 'Personalizado',
    disabled: 'Desactivado',
};
