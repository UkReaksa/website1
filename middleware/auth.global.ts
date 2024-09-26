export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
   const isAuth = false;
    if (!isAuth && to.path === "/product/about" ) {
      return navigateTo('/login/form')
    }
  })