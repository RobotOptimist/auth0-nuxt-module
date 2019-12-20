export interface Auth0ModuleOptions {
    domain: string,
    client_id: string,
    audience: string,
    redirect_uri: string,
    responseType: string,
    scope: string
}