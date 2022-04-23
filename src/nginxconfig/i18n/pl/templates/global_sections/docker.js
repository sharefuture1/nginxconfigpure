

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} Compose`,
    applyDockerTweaks: `Zastosuj poprawki pod ${docker}a`,
    applyDockerTweaksForNginx: `Zastosuj poprawki konfiguracyjne pod ${common.nginx} z ${docker}em`,
    applyDockerTweaksExplainer: `Aktualizuje użytkownika ${common.nginx} na <code class="slim">nginx</code> oraz ustawia pid na <code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `Dołącz ${dockerfile}, aby uruchomić ${common.nginx} z ${docker}`,
    includeDockerCompose: `Dołącz docker-compose, aby uruchomić ${common.nginx} z docker-compose`,
};
