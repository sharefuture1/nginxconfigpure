

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} Compose`,
    applyDockerTweaks: `Aplicar ajustes de ${docker}`,
    applyDockerTweaksForNginx: `Aplicar ajuste de configuracion para ejecutar ${common.nginx} con ${docker}`,
    applyDockerTweaksExplainer: `Actualizar el usuario de ${common.nginx} a <code class="slim">nginx</code> y el pid a <code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `Incluir ${dockerfile} para ejecutar ${common.nginx} con ${docker}`,
    includeDockerCompose: `Incluir docker-compose para ejecutar ${common.nginx} con docker-compose`,
};
