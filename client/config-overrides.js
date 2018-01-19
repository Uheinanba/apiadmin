module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function(config, env) {
    // ...add your webpack config customisation, rewires, etc...
    // Example: add less support to your app.
    const rewireLess = require('react-app-rewire-less');
    config = rewireLess(config, env);

    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const myProxy = Object.assign({}, proxy, {
        '/fs-er-biz/er/bpm': {
          target: `http://10.22.10.249:3800`,
        },
      });
      const config = configFunction(proxy, allowedHost);
      return config;
    };
  },
};
