import { Plugin } from '@nuxt/types'
import AuthVue from '../auth0/auth-vue'

let authVue: AuthVue | undefined;
const auth0Plugin: Plugin = function (ctx, inject) {
    inject('auth', authVue)
}

export default (function(_authVue: AuthVue | undefined) {
    authVue = _authVue;
    return auth0Plugin
})(authVue)