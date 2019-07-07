const Encore = require('@symfony/webpack-encore');
const path = require('path');
const getEzConfig = require('./ez.webpack.config.js');
const eZConfigManager = require('./ez.webpack.config.manager.js');
const eZConfig = getEzConfig(Encore);
const customConfigs = require('./ez.webpack.custom.configs.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore.reset();
Encore.setOutputPath('web/assets/build')
    .setPublicPath('/assets/build')
    .enableSassLoader()
    .enableReactPreset()
    .enableSingleRuntimeChunk();

// Put your config here.

// uncomment the two lines below, if you added a new entry (by Encore.addEntry() or Encore.addStyleEntry() method) to your own Encore configuration for your project
// const projectConfig = Encore.getWebpackConfig();
// module.exports = [ eZConfig, ...customConfigs, projectConfig ];

Encore.addEntry('cloud', [
    path.resolve(__dirname, './web/assets/scss/cloud/theme.scss'),
]);

Encore.addEntry('slymfony', [
    path.resolve(__dirname, './web/assets/scss/slymfony/theme.scss'),
]);

Encore.addEntry('reactenclaw', [
    path.resolve(__dirname, './web/assets/scss/reactenclaw/theme.scss'),
]);

Encore.addEntry('worpindorf', [
    path.resolve(__dirname, './web/assets/scss/worpindorf/theme.scss'),
]);

Encore.addEntry('slackelpuff', [
    path.resolve(__dirname, './web/assets/scss/slackelpuff/theme.scss'),
]);

Encore.addPlugin(new CopyWebpackPlugin([
    { from: './web/assets/images', to: 'images' }
]))
const projectConfig = Encore.getWebpackConfig();

// comment-out this line if you've uncommented the above lines
module.exports = [ eZConfig, ...customConfigs, projectConfig ];
