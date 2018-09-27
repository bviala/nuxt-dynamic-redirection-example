# Dynamic redirection example

This provides an example on how to set up a dynamic redirection after Sign in on an universal Nuxt application.
After Sign in, it redirects the user to the protected page he attempted to see.

Files of interest:

* /pages/secret.vue
* /pages/anotherSecret.vue
* /pages/login.vue
* /middleware/isAuthenticated.js
* /store/index.js

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
