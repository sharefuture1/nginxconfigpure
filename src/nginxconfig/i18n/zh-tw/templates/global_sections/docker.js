

import common from '../../common';

const docker = 'Docker';
const dockerfile = 'Dockerfile';

export default {
    docker,
    dockerfile,
    dockerCompose: `${docker} 編排服務`,
    applyDockerTweaks: `應用${docker}調整`,
    applyDockerTweaksForNginx: `為使用${docker}運行${common.nginx}進行配置調整。`,
    applyDockerTweaksExplainer: `將${common.nginx}用戶更新為<code class="slim">nginx</code>，將pid更新為<code class="slim">/var/run/nginx.pid</code>`,
    includeDockerfile: `生成${dockerfile}運行${common.nginx}與${docker}`,
    includeDockerCompose: `生成docker-compose.yaml來運行${common.nginx} docker-compose`,
};
