

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} Compose`,
    applyDockerTweaks: `Aplicar ajustes do ${docker}`,
    applyDockerTweaksForNginx: `Aplicar ajustes de configuração para executar o ${common.nginx} com ${docker}`,
    applyDockerTweaksExplainer: `Atualiza o usuário ${common.nginx} para ser <code class="slim">nginx</code> e o pid para <code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `Incluir o ${dockerfile} para executar o ${common.nginx} com ${docker}`,
    includeDockerCompose: `Incluir o docker-compose para executar o ${common.nginx} com docker-compose`,
};
