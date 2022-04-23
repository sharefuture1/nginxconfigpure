
import yaml from 'json-to-pretty-yaml';

export default yamlConf => {
    return yaml.stringify(yamlConf);
};
