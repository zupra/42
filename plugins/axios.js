// Authorization
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
/**/
export default function ({ $axios, $storage, $toast }) {
  //const token = store.state.storage.api_token

  $axios.setToken($storage.getUniversal('api_token'), 'Bearer')


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
          href: `${this.$config.API_URL}entrance`,
        },
      })
    }
  })
}