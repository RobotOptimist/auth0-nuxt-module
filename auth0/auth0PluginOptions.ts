import { Auth0ModuleOptions } from './auth0ModuleOptions'

export default class Auth0PluginOptions {
    onRedirectCallback: Function;
    authService: Function;
    options: Auth0ModuleOptions;

    constructor(_onRedirectCallback: Function, 
        _authService: Function, 
        _options: Auth0ModuleOptions) {
            this.onRedirectCallback = _onRedirectCallback;
            this.authService = _authService;
            this.options = _options;
    }
}