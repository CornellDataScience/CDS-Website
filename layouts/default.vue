<template>
  <v-app >
    <v-app-bar
      app
    >
      <NuxtLink to="/">
        <img src="logo.png" width="50px" class="mr-5"/>
      </NuxtLink>
      <NuxtLink to="/" style="text-decoration:none">
        <v-toolbar-title v-text="title" class="secondary--text" />
      </NuxtLink>
      <v-spacer />

      <div v-for="page in pages" :key="page.name">
        <v-btn :plain="page.plain" :text="page.text" class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="page.to" nuxt>
          {{page.name}}
        </v-btn>
      </div>
      <v-btn text class="nav-btn mx-2 accent body-2 font-weight-medium" to="/contact" nuxt>
        Contact
      </v-btn>
    </v-app-bar>

    <v-main my-5>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    
    <v-footer
      class="justify-center py-5 mt-5"
    >
      <div>
        <v-row class="justify-center" height="20px">
          <v-col cols="3">
            <v-btn icon href="mailto:cornelldatascience@gmail.com">
              <font-awesome-icon icon="envelope" size="lg"/>
            </v-btn>
          </v-col>

          <v-col cols="3">
            <v-btn icon href="https://www.instagram.com/cornelldatascience/" target="_blank">
              <font-awesome-icon :icon="faInstagram" size="lg"/>
            </v-btn>
          </v-col>

          <v-col cols="3">
            <v-btn icon href="https://www.facebook.com/CornellDataScience/" target="_blank">
              <font-awesome-icon :icon="faFacebook" size="lg"/>
            </v-btn>
          </v-col>

        </v-row>
        <span class="subtitle-1 text-center">
          Cornell Data Science, &copy; {{ new Date().getFullYear() }}
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
export default {
  components: {
    // SvgIcon
  },
  computed: {
    faInstagram () {
      return faInstagram
    },
    faFacebook () {
      return faFacebook
    }
  },
  data () {
    return {
      hover: false,
      pages: [
        {
          name: 'Home',
          to: '/',
          plain: true,
          text: false
        },
        {
          name: 'Recruitement',
          to: '/recruitement',
          plain: true,
          text: false
        },
        {
          name: 'Teams',
          to: '/teams',
          plain: true,
          text: false
        },
        {
          name: 'People',
          to: '/people',
          plain: true,
          text: false
        },
        {
          name: 'Education',
          to: '/education',
          plain: true,
          text: false
        },
        {
          name: 'Blog',
          to: '/blog',
          plain: true,
          text: false
        },
      ],
      title: 'Cornell Data Science'
    }
  }
}
</script>

<style scoped>

.nav-btn:before {
  color: var(--v-secondary-base);
}

.nav-btn:hover {
  color: var(--v-primary-base);
}

.nav-btn:activated {
  color: var(--v-primary-base);
}
</style>
