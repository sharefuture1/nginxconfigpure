

import common from '../../common';

export default {
    pythonIsDisabled: `${common.python} esta desactivado.`,
    pythonCannotBeEnabledWithReverseProxy: `${common.python} no se puede habilitar mientras el proxy inverso está habilitado.`,
    pythonCannotBeEnabledWithPhp: `${common.python} no se puede habilitar mientras ${common.php} está habilitado.`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `Reglas de ${common.django}`,
    enableDjangoRules: `${common.enable} reglas especificas de ${common.django}`,
};
