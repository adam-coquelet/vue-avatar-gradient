import Avatar from './Avatar.vue'

// Auto-install when included via script tag
Avatar.install = (app) => {
  app.component('Avatar', Avatar)
}

export default Avatar
export { Avatar }