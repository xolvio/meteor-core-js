Package.describe({
  name: 'xolvio:core-js',
  summary: 'ES2015 and ES2016 polyfills via core-js',
  version: '1.2.1_1',
  git: 'https://github.com/xolvio/meteor-core-js.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');
  api.imply('promise');
  api.imply('ecmascript-collections');
  api.addFiles('core-js.js');
});
