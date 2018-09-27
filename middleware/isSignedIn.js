export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    console.log('Not authenticated. Holding page in the store: ' + route.fullPath)
    store.commit('holdPage', route.fullPath) // hold the page for further redirection after successful login
    console.log('Reading hold page from the store: ' + store.state.holdPage) // this works well, you can read the page in server console
    return redirect('/login')
  }
}