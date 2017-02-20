const config = require('./' + JS_ENV + '.js');

config.default.ENV = JS_ENV;

export default config.default;