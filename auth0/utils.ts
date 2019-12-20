import Auth0 from '@auth0/auth0-spa-js';
import Auth0PluginOptions from './auth0PluginOptions';
import AuthVue from './auth-vue';

export default function defineVueAuthService(options: Auth0PluginOptions): AuthVue {
    options.authService = Auth0;
    return new AuthVue(options);
}