export default function ({ store, router, route }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    console.log('/middleware/isAuthenticated.js : Holding page in the store: ' + route.fullPath)
    store.commit('holdPage', route.fullPath) // hold the page for further redirection after successful login
    console.log('/middleware/isAuthenticated.js : Reading hold page from the store: ' + store.state.holdPage) // this works well, you can read the page in terminal when SSR and in browser console when CSR
    /* return redirect('/login') */
    router.push('/login')
  }
}