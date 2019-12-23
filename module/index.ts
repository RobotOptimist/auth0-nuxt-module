const { resolve, join, basename } = require('path')
import { Module } from '@nuxt/types';
import { merge } from 'lodash';
import { Auth0ModuleOptions } from '../auth0/auth0ModuleOptions';
import defineVueAuthService from '../auth0/utils';
import Auth0PluginOptions from '../auth0/auth0PluginOptions';
import AuthVue from '../auth0/auth-vue';

const libRoot = resolve(__dirname, '..');

const auth0Module: Module<Auth0ModuleOptions> = function (moduleOptions: any) {
    const options = merge({}, moduleOptions, this.options.auth);
    const pluginOptions = new Auth0PluginOptions(moduleOptions.redirect.default, null, options);
    const authVue = defineVueAuthService(pluginOptions);
    copyPlugin(authVue);
}

function copyPlugin(authVue: AuthVue) {
    const { dst } = this.addTemplate({
        src: resolve(libRoot, 'module', 'plugin.ts'),
        fileName: join('auth', 'plugin.ts'),
        options: { authVue }
    });
    this.options.plugins.push(resolve(this.options.buildDir, dst));    
}

export default auth0Module