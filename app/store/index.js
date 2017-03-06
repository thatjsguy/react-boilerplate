const prodEnv = process.env.NODE_ENV === 'production';
module.exports = require( `./store${ prodEnv ? '' : '.dev' }` );
