# store-example

Files of interest:

/pages/secret.vue
/pages/login.vue
/middleware/isAuthenticated.js
/store/index.js

Try to access /secret. Because of the middleware, you will be redirected to /login.
You can check in your terminal that /secret is correctly hold in the store server side.
Open the browser console and click on the login button. You will see that client side the holdPage state is still null.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
