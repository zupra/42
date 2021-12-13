<template>
  <div class="m-auto container">

    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="userInfo">
        <pre v-if="userInfo">{{userInfo}}</pre>
      </a-tab-pane>
    </a-tabs>

  </div>
</template>

<script>
export default {
  // -- Предзагрузка данных
  // async asyncData({ $axios }) {
  //   const [info] = await Promise.all([$axios.$get('user/info')])
  //   return {
  //     userInfo: info,
  //   }
  // },
  data() {
    return {
      userInfo: null,
      //
      loginData: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  mounted() {
    // this.$notification.open({
    //   message: 'Проверка API',
    //   description: 'https://api.agentprox.com/api/documentation',
    // })
    this.getUserInfo() 
  },
  methods: {
    callback(key) {
      console.log(key);
    },

    async getUserInfo() {
      try {
        const data = await this.$axios.$get('user/info')
        this.userInfo = data
      } catch (error) {
        // this.$toast.error('error', { duration: 4000, keepOnHover: true });
        // this.$message.error('Ошибка')
        location.reload();
        console.log(error)
      }
    },

    /*    
      async fetchToken() {
        const token = await this.$axios.$post(
          "/user/login",
          {
            email: "dima5447298@mail.ru",
            password: "qwerty",
          }
        );
        alert(token);
      },

      async register() {
        const response = await fetch('https://api.agentprox.com/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: '{"name": "User name","email":"dima5447298@mail.ru","password":"qwerty"}',
        })
        const result = await response.json()
        console.log(result)
      },




      register(USER) {
        this.$axios.$post('user/register', {
          ...USER,
        })
          .then((response) => this.$message.success('Успешно'))
          .catch( (error) => {
            this.$notification.error({
              message: 'Ошибка',
              description: `${JSON.stringify(error?.response?.data)}`,
            });
            // this.$message.error(`${JSON.stringify(error?.response?.data)}`, 5);
            // alert( JSON.stringify(error?.response?.data) )
          });
      },

      login(USER) {
        this.$axios.$post('user/login', {
          ...USER,
        })
          // .then((data) => this.$storage.setUniversal('api_token', data))
          .then((data) => alert(JSON.stringify(data.token)))
          .then((response) => this.$message.success('Успешно'))
          .catch( (error) => {
            this.$notification.error({
              message: 'Ошибка',
              description: `${JSON.stringify(error?.response?.data)}`,
            });
          });
      },
    */

    /*     
      async register(USER) {
        try {
          const data = await this.$axios.$post('user/register', {
            ...USER,
          })
          this.$notification.open({
            message: 'API user/register',
            description: data,
          })
        } catch (error) {
          this.$toast.error('error', { duration: 4000, keepOnHover: true });

          console.log(error.response);
          this.$message.error('This is an error message');
        }
      },
    */

    /*    
      async login() {
        const response = await fetch('https://api.agentprox.com/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: '{"email":"dima5447298@mail.ru","password":"qwerty"}',
        })
        const result = await response.json()
        console.log(result)
      },
    */
  },
}
</script>