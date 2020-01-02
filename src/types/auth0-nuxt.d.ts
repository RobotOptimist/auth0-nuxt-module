import AuthVue from "../auth0/auth-vue";

declare module 'vue/types/vue' {
    interface Vue {
      $auth: AuthVue
    }
  }
  
  declare module '@nuxt/types' {
    interface NuxtAppOptions {
      $auth: AuthVue
    }
  }
  
  declare module 'vuex/types/index' {
    interface Store<S> {
      $auth: AuthVue
    }
  }