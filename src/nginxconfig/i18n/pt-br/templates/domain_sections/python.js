

import common from '../../common';

export default {
    pythonIsDisabled: `O ${common.python} está desabilitado.`,
    pythonCannotBeEnabledWithReverseProxy: `O ${common.python} não pode ser habilitado enquanto o proxy reverso estiver habilitado.`,
    pythonCannotBeEnabledWithPhp: `O ${common.python} não pode ser habilitado enquanto o ${common.php} estiver habilitado.`,
    enablePython: `${common.enable} ${common.python}`,
    djangoRules: `Regras do ${common.django}`,
    enableDjangoRules: `${common.enable} regras específicas do ${common.django}`,
};
