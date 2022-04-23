

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} Compose`,
    applyDockerTweaks: `${docker} Optimierungen anwenden`,
    applyDockerTweaksForNginx: `Füge Optimierungen für den Betrieb von ${common.nginx} mit ${docker} der Konfigurationsdatei hinzu`,
    applyDockerTweaksExplainer: `Setzt den ${common.nginx} Benutzer auf <code class="slim">nginx</code> und die PID auf <code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `${dockerfile} hinzufügen, um ${common.nginx} mit ${docker} zu betreiben`,
    includeDockerCompose: `docker-compose.yaml hinzufügen, um ${common.nginx} mit docker-compose zu betreiben`,
};
