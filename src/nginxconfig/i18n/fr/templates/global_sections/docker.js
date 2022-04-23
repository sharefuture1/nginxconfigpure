

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} Compose`,
    applyDockerTweaks: `Configurer pour ${docker}`,
    applyDockerTweaksForNginx: `Applique des ajustements pour exécuter ${common.nginx} avec ${docker}`,
    applyDockerTweaksExplainer: `Définit l'utilisateur ${common.nginx} comme <code class="slim">nginx</code> et le pid comme <code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `Inclure un ${dockerfile} pour exécuter ${common.nginx} avec ${docker}`,
    includeDockerCompose: `Inclure un docker-compose pour exécuter ${common.nginx} avec docker-compose`,
};
