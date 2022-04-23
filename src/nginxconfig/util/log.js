
export const info = process.env.NODE_ENV !== 'production' ? console.info.bind(console) : () => {};
export const log = process.env.NODE_ENV !== 'production' ? console.log.bind(console) : () => {};

export const warn = console.warn.bind(console);
export const error = console.error.bind(console);
