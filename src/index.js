import AvatarGradient from './AvatarGradient.vue'

// Auto-install when included via script tag
AvatarGradient.install = (app) => {
  app.component('AvatarGradient', AvatarGradient)
}

export default AvatarGradient
export { AvatarGradient }