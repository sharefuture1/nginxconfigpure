

import isObject from './is_object';
import deepMerge from './deep_merge';

// Handle converting the old query format to our new query params
export default data => {
    // Handle converting old domain settings to new ones
    if ('global' in data && isObject(data.global)) {
        // Handle specifics global data
        const mappedData = {
            php: {},
        };

        // Keys to map
        const keysToMap = {
            php: [
                'phpServer',
                'phpServerCustom',
                'phpBackupServer',
                'phpBackupServerCustom',
            ],
        };

        for (const key in data.global) {
            if (!Object.prototype.hasOwnProperty.call(data.global, key)) continue;

            // Skip if key doesn't need to be mapped
            if (!Object.prototype.hasOwnProperty.call(keysToMap, key)) continue;

            for (const key2 in data.global[key]) {
                if (!Object.prototype.hasOwnProperty.call(data.global[key], key2)) continue;

                if (keysToMap[key].includes(key2)) {
                    mappedData[key][key2] = data.global[key][key2];
                }
            }
        }

        for (const key in data.domains) {
            if (!Object.prototype.hasOwnProperty.call(data.domains, key)) continue;

            // Deep merge the mapped data
            deepMerge(data.domains[key], mappedData);
        }
    }
};
