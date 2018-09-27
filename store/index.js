import Vuex from 'vuex'

const url = require('url')

const createStore = () => {
  return new Vuex.Store({
    state: {
      authenticated: false,
      redirectAfterSignIn: null // hold the page the unenthauticated user tried to access to
    },
    mutations: {
      signedIn (state) {
        state.authenticated = true
      },
      signOut (state) {
        state.authenticated = false
      },
      setRedirectAfterSignIn (state, path) {
        state.redirectAfterSignIn = path
      }
    },
    actions: {
      signIn ({ commit, state }) {
        commit('signedIn')
        const redirection = state.redirectAfterSignIn ? state.redirectAfterSignIn : '/' // if no set redirection, redirect to homepage
        this.$router.push(redirection)
      },
      nuxtServerInit ({ commit }, { req }) {
        let urlParts = url.parse(req.originalUrl, true)
        if (urlParts.query.redirect) commit('setRedirectAfterSignIn', urlParts.query.redirect)
      }
    }
  })
}

export default createStore