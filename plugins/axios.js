// Authorization
export default function ({ $axios, store, $toast }) {

  $axios.onRequest(config => {
    const token = store.state.storage.api_token
    $axios.setToken(token, 'Bearer')
  })

  /* INVALID TOKEN */
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 403) {
      this.$storage.removeUniversal('api_token')
      $toast.show('Вы неавторизованы', {
        duration: 4000,
        keepOnHover: true,
        action: {
          text: 'Войти',
          href: '/',
        },
      })
    }
  })
}