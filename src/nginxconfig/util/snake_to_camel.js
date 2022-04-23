

export default str => str.replace(/_(\w)/g, m => `${m[0].replace('_', '')}${m[1].toUpperCase()}`);
