import Vue from "vue";
import Auth0Client from "@auth0/auth0-spa-js/dist/typings/Auth0Client";


export default class AuthVue extends Vue {
    loading: boolean = true;
    isAuthenticated: boolean = false;
    user: any = {};
    authClient: Auth0Client;
    popupOpen: boolean = false;
    error: Error | null = null;

    constructor(private authService: Function,
        private onRedirectCallback: Function,
        private options: any,
        private redirectUri: string) {
        super();
        this.authClient = this.authService(options);
        this.created();
    }

    async created() {
        this.authClient = await this.authService({
            domain: this.options.domain,
            client_id: this.options.clientId,
            audience: this.options.audience,
            redirect_uri: this.redirectUri,
            responseType: "token id_token",
            scope: "openid profile"
        });
        try {
            // If the user is returning to the app after authentication..
            if (
              window.location.search.includes("code=") &&
              window.location.search.includes("state=")
            ) {
              // handle the redirect and retrieve tokens
              const { appState } = await this.authClient.handleRedirectCallback()
    
              // Notify subscribers that the redirect callback has happened, passing the appState
              // (useful for retrieving any pre-authentication state)
              this.onRedirectCallback(appState);
            }
          } catch (e) {
            this.error = e;
          } finally {
            // Initialize our internal authentication state
            this.isAuthenticated = await this.authClient.isAuthenticated();
            this.user = await this.authClient.getUser();
            this.loading = false;
          }
    }    
    async loginWithPopup(o: PopupLoginOptions | undefined) {
        this.popupOpen = true;
        try {
            await this.authClient.loginWithPopup(o);
        } catch (e) {
            console.error('Failed to login with popup', e);
        } finally {
            this.popupOpen = false;
        }

        this.user = await this.authClient.getUser();
        this.isAuthenticated = true;
    }

    async handleRedirectCallback() {
        this.loading = true;
        try {
            await this.authClient.handleRedirectCallback();
            this.user = await this.authClient.getUser();
            this.isAuthenticated = true;
        } catch (e) {
            this.error = e;
        } finally {
            this.loading = false;
        }
    }

    loginWithRedirect(o?: RedirectLoginOptions | undefined) {
        return this.authClient.loginWithRedirect(o);
    }

    getIdTokenClaims(o: getIdTokenClaimsOptions | undefined) {
        return this.authClient.getIdTokenClaims(o);
    }

    getTokenSilently(o: GetTokenSilentlyOptions) {
        return this.authClient.getTokenSilently(o);
    }

    getTokenWithPopup(o: GetTokenWithPopupOptions) {
        return this.authClient.getTokenWithPopup(o);
    }

    logout(o: LogoutOptions) {
        return this.authClient.logout(o);
    }
}