<template>
  <div>
    <header class="text-gray-600 body-font">
      <div
        class="
          container
          mx-auto
          flex flex-wrap
          p-5
          flex-col
          md:flex-row
          items-center
        "
      >
        <a
          class="
            flex
            title-font
            font-medium
            items-center
            text-gray-900
            mb-4
            md:mb-0
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg>
          <span class="ml-3 text-xl">Agentprox</span>
        </a>
        <nav
          class="
            md:ml-auto
            flex flex-wrap
            items-center
            text-base
            justify-center
          "
        >
          <a class="mr-5 hover:text-gray-900">First Link</a>
          <a class="mr-5 hover:text-gray-900">Second Link</a>
          <a class="mr-5 hover:text-gray-900">Third Link</a>
          <a class="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button
          class="
            cursor-pointer
            inline-flex
            items-center
            bg-gray-100
            border-0
            py-1
            px-3
            focus:outline-none
            hover:bg-gray-200
            rounded
            text-base
            mt-4
            md:mt-0
          "
          @click="showLightbox = true"
        >
          Войти
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>

    <Nuxt />

    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2
              class="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2
              class="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2
              class="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2
              class="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2
              class="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2
              class="
                title-font
                font-medium
                text-gray-900
                tracking-widest
                text-sm
                mb-3
              "
            >
              CATEGORIES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <a class="text-gray-600 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-200">
        <div class="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div
            class="
              flex
              md:flex-nowrap
              flex-wrap
              justify-center
              items-end
              md:justify-start
            "
          >
            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text-sm text-gray-600"
                >Placeholder</label
              >
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                class="
                  w-full
                  bg-gray-100 bg-opacity-50
                  rounded
                  border !border-gray-300
                  focus:ring-2
                  focus:bg-transparent
                  focus:ring-indigo-200
                  focus:border-indigo-500
                  text-base
                  outline-none
                  text-gray-700
                  py-1
                  px-3
                  leading-8
                  transition-colors
                  duration-200
                  ease-in-out
                "
              />
            </div>
            <button
              class="
                inline-flex
                text-white
                bg-indigo-500
                border-0
                py-2
                px-6
                focus:outline-none
                hover:bg-indigo-600
                rounded
              "
            >
              Button
            </button>
            <p
              class="
                text-gray-500 text-sm
                md:ml-6 md:mt-0
                mt-2
                sm:text-left
                text-center
              "
            >
              Bitters chicharrones fanny pack
              <br class="lg:block hidden" />waistcoat green juice
            </p>
          </div>
          <span
            class="
              inline-flex
              lg:ml-auto lg:mt-0
              mt-6
              w-full
              justify-center
              md:justify-start md:w-auto
            "
          >
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="bg-gray-100">
        <div
          class="
            container
            mx-auto
            py-4
            px-5
            flex flex-wrap flex-col
            sm:flex-row
          "
        >
          <p class="text-gray-500 text-sm text-center sm:text-left">
            © 2021 Agentprox —
          </p>
          <span
            class="
              sm:ml-auto sm:mt-0
              mt-2
              sm:w-auto
              w-full
              sm:text-left
              text-center text-gray-500 text-sm
            "
            >Enamel pin tousled raclette tacos irony</span
          >
        </div>
      </div>
    </footer>

    <CLightbox :show.sync="showLightbox">
      <CTabs :idx="TAB" class="w-300px">
        <CTab name="Зарегистрироваться">
          <a-input name="name" size="large" v-model="loginData.name" placeholder="name"/>
          <a-input name="email" size="large" class="!mt-2" v-model="loginData.email" placeholder="email"/>
          <a-input-password name="password" size="large" class="!my-2" v-model="loginData.password" placeholder="password"/>
          <a-button
            class="mt-6"
            block
            size="large" 
            type="primary"
            :disabled="Object.values(loginData).includes('')"
            @click="register(loginData)">Зарегистрироваться</a-button>
          </a-card>
        </CTab>
        <CTab name="Войти">
          <a-input name="email" size="large" v-model="loginData.email" placeholder="email"/>
          <a-input-password name="password" size="large" class="!my-2" v-model="loginData.password" placeholder="password" />
          <a-button
            class="mt-6"
            block
            size="large" 
            type="primary" 
            :disabled="!loginData.email && !loginData.password"
            @click="login(loginData)">Войти</a-button>
        </CTab>
      </CTabs>

      <!-- <div>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="Tab 1">
            Content of Tab Pane 1
          </a-tab-pane>
          <a-tab-pane key="2" tab="Tab 2" force-render>
            Content of Tab Pane 2
          </a-tab-pane>
        </a-tabs>
      </div> -->
    </CLightbox>



  </div>
</template>

<script>
export default {
  data() {
    return {
      TAB: 0,
      showLightbox: false,
      loginData: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    register(USER) {
      this.$axios
        .$post('user/register', {
          ...USER,
        })
        .then((response) => {
          this.$message.success('Вы зарегистрировались');
          this.TAB = 1
        })
        .catch((error) => {
          this.$notification.error({
            message: 'Ошибка',
            description: `${JSON.stringify(error?.response?.data)}`,
          })
          // this.$message.error(`${JSON.stringify(error?.response?.data)}`, 5);
          // alert( JSON.stringify(error?.response?.data) )
        })
    },

    login(USER) {
      this.$axios
        .$post('user/login', {
          ...USER,
        })
        // .then((data) => this.$storage.setUniversal('api_token', data))
        // .then((data) => alert(JSON.stringify(data.token)))
        .then((data) => {
          // alert(JSON.stringify(data.token));
          this.$storage.setUniversal('api_token', data.token);
          this.$message.success('Успешно');
          
          // location.reload()
          // this.$storage.getUniversal('api_token') && this.$router.push('/app');
          
          // this.$axios.setToken(this.$storage.getUniversal('api_token'), 'Bearer')
          // this.$router.redirect('/app');
          // this.$axios.setToken(data.token, 'Bearer')

          this.showLightbox = false;
          this.$router.push('/app');
          // (() => new Promise((resolve) => setTimeout(this.$router.push('/app'), 2000)))()

        })
        .catch((error) => {
          error.response && this.$notification.error({
            message: 'Ошибка',
            description: `${JSON.stringify(error?.response?.data)}`,
          })
        })
    },
  },
}
</script>

<style>
</style>