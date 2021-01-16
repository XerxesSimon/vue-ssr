import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import app from './modules/app'
import foo from './modules/ok'
import getters from './modules/getter'

Vue.use(Vuex)

export default () => {
    return new Vuex.Store({
        modules:{
            foo,
            user,
            app
        },
        getters,
        strict: process.env.NODE_ENV !== 'production'
    })
}