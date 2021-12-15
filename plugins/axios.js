// Authorization
export default function ({ $axios, store, redirect, $toast, $storage, }) {

  $axios.onRequest(config => {
    const token = store.state.storage.api_token
    $axios.setToken(token, 'Bearer')
  })

  /* INVALID TOKEN */
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 403) {


      redirect('./#login')
      // $storage.removeUniversal('api_token')
      /*      
        $toast.show('Недостаточно прав', {
          duration: 5000,
          keepOnHover: true,
          action: {
            text: 'Войти',
            href: '/#login',
          },
        })
      */




    }
  })
}