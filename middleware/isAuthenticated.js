export default function ({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    // store the page the user attempted to see
    store.commit('setRedirectAfterSignIn', route.fullPath) // Only works for CSR redirection, as SSR redirection will clear the store
    
    // redirect to /login page
    return redirect(`/login?redirect=${route.fullPath}`) // put the path as a redirection param so that nuxtServerInit can populate the store
  }
}