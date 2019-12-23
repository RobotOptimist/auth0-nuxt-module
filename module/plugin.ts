import { Plugin } from '@nuxt/types'
import AuthVue from '../auth0/auth-vue'

let authVue: AuthVue = null;
const auth0Plugin: Plugin = function (ctx, inject) {
    inject('auth', authVue)
}

export default (function(_authVue: AuthVue) {
    authVue = _authVue;
    return auth0Plugin
})(authVue)