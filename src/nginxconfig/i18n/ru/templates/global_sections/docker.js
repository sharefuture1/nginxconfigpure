

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} Compose`,
    applyDockerTweaks: `Применить настройки ${docker}`,
    applyDockerTweaksForNginx: `Примените настройки конфигурации для запуска ${common.nginx} с ${docker}`,
    applyDockerTweaksExplainer: `Обновляет пользователя ${common.nginx} на <code class="slim">nginx</code> и pid на <code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `Добавить ${dockerfile}, чтобы запустить ${common.nginx} с ${docker}`,
    includeDockerCompose: `Добавить docker-compose, чтобы запустить ${common.nginx} с docker-compose`,
};
