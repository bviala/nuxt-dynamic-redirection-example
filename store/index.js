import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      authenticated: false,
      holdPage: null // hold the page the unenthauticated user tried to access to
    },
    mutations: {
      signedIn (state) {
        state.authenticated = true
      },
      signOut (state) {
        state.authenticated = falses
      },
      holdPage (state, page) {
        state.holdPage = page
      }
    },
    actions: {
      signIn ({ commit, state }) {
        commit('signedIn')
        console.log('/store/index.js : Reading holdPage from the store: ' + state.holdPage) // this does not work with SSR redirection, it's null
        if ( state.holdPage ) {
          this.$router.push(state.holdPage)
        } else {
          this.$router.push('/')
        }
      }
      /* nuxtServerInit ({ commit }, { req }) {
        let accessToken = null
        if (req.headers.cookie) {
          var parsed = cookieparser.parse(req.headers.cookie)
          accessToken = JSON.parse(parsed.auth)
        }
        commit('update', accessToken)
      } */
    }
  })
}

export default createStore