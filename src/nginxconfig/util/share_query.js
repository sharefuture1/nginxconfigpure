

import qs from 'qs';
import exportData from './export_data';

export default (domains, global) => {
    const data = exportData(domains, global);
    const query = qs.stringify(data, { allowDots: true });
    return `${query.length > 1000 ? '#' : ''}${query.length ? '?' : ''}${query}`;
};
