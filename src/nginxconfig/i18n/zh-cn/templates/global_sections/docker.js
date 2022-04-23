

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} 编排服务`,
    applyDockerTweaks: `应用${docker}调整`,
    applyDockerTweaksForNginx: `为使用${docker}运行${common.nginx}进行配置调整。`,
    applyDockerTweaksExplainer: `将${common.nginx}用户更新为<code class="slim">nginx</code>，将pid更新为<code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `生成${dockerfile}运行${common.nginx}与${docker}`,
    includeDockerCompose: `生成docker-compose.yaml来运行${common.nginx} docker-compose`,
};
