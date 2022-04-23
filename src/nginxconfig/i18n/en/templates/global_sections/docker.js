

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} Compose`,
    applyDockerTweaks: `Apply ${docker} tweaks`,
    applyDockerTweaksForNginx: `Apply configuration tweaks for running ${common.nginx} with ${docker}`,
    applyDockerTweaksExplainer: `Updates the ${common.nginx} user to be <code class="slim">nginx</code> and the pid to <code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `Include ${dockerfile} to run ${common.nginx} with ${docker}`,
    includeDockerCompose: `Include docker-compose to run ${common.nginx} with docker-compose`,
};
