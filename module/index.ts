import { Module } from '@nuxt/types';
import { merge } from 'lodash';
import { Auth0ModuleOptions } from '../auth0/auth0ModuleOptions';

const auth0Module: Module<Auth0ModuleOptions> = function (moduleOptions) {
    const options = merge({}, moduleOptions, this.options.auth);
    
}

export default auth0Module