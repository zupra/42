<template>
  <div class="m-auto container">

    <div class="grid grid-cols-2 gap-8">
      <a-card size="small" title="Test register">
        <a-input v-model="loginData.name" placeholder="name"/>
        <a-input class="!mt-2" v-model="loginData.email" placeholder="email"/>
        <a-input class="!my-2" v-model="loginData.password" placeholder="password"/>
        <!--   -->
        <a-button 
          type="primary"
          :disabled="Object.values(loginData).includes('')"
          @click="register(loginData)">register</a-button>
      </a-card>

      <a-card size="small" title="Test login">
        <a-input v-model="loginData.email" placeholder="email"/>
        <a-input class="!my-2" v-model="loginData.password" placeholder="password" />
        <a-button 
          type="primary" 
          :disabled="!loginData.email && !loginData.password"
          @click="login(loginData)">login</a-button>
      </a-card>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  created() {
    this.$notification.open({
      message: 'Проверка API',
      description: 'https://api.agentprox.com/api/documentation',
    })
  },
  methods: {
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
    */


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