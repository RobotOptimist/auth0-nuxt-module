import { Auth0ModuleOptions } from './auth0ModuleOptions'

export class Auth0PluginOptions {
    onRedirectCallback: Function;
    authService: Function;
    redirectUri: string;
    options: Auth0ModuleOptions;

    constructor(_onRedirectCallback: Function, 
        _authService: Function, 
        _redirectUri: string, 
        _options: Auth0ModuleOptions) {
            this.onRedirectCallback = _onRedirectCallback;
            this.authService = _authService;
            this.redirectUri = _redirectUri;
            this.options = _options;
    }
}