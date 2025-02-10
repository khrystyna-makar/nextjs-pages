const isProd = process.env.NODE_ENV === 'production';

const prefix = isProd ? '/nextjs-pages' : '';

export { prefix };