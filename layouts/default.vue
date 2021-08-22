<template>
  <v-app >
    <v-app-bar>
      <NuxtLink to="/">
        <img src="logo.png" width="50px" class="mr-5"/>
      </NuxtLink>
      <NuxtLink to="/" style="text-decoration:none">
        <v-toolbar-title v-text="title" class="secondary--text" />
      </NuxtLink>
      <v-spacer />

      <!-- Full Nav Bar -->
      <div class="hidden-sm-and-down">
        <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="'/recruitment'" nuxt>
          Recruitment
        </v-btn>

        <v-menu
          open-on-hover
          bottom
          offset-y
        >
          <template v-slot:activator="{ on }">
            <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="'/teams'" v-on="on" nuxt>
              Teams
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in teams" :key="index">
              <v-list-item-title>
                <v-btn plain class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" v-bind:to="item.to" v-bind="attrs" v-on="on" nuxt>
                  {{ item.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="'/people'" nuxt>
          People
        </v-btn>
        <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="'/education'" nuxt>
          Education
        </v-btn>
        <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="'/blog'">
          Blog
        </v-btn>
        <v-btn text small class="nav-btn mx-2 accent body-2 font-weight-medium" to="/contact" nuxt>
          Contact
        </v-btn>
      </div>

      <!-- Mobile Nav Bar -->
      <v-menu open-on-click bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn plain class="hidden-md-and-up nav-btn body-2 font-weight-medium" active-class="primary--text" v-on="on">
            <v-icon large >mdi-menu</v-icon>
          </v-btn>
        </template>
        
        <v-list nav>
          <v-list-item>
            <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" :to="'/recruitment'" nuxt>
              Recruitment
            </v-btn>
          </v-list-item>

          <v-list-item>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" v-on="on">
                  Teams
                </v-btn>
              </template>

              <v-list nav>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" v-bind:to="'/teams'" v-bind="attrs" v-on="on" nuxt>
                      Overview
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-for="(item, index) in teams" :key="index">
                  <v-list-item-title>
                    <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" v-bind:to="item.to" v-bind="attrs" v-on="on" nuxt>
                      {{ item.title }}
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>

          <v-list-item>
            <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" :to="'/people'" nuxt>
              People
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" :to="'/education'" nuxt>
              Education
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" :to="'/blog'">
              Blog
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text x-small class="nav-btn accent body-2 font-weight-medium" to="/contact" nuxt>
              Contact
            </v-btn>
          </v-list-item>

        </v-list>
      </v-menu>
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
      title: 'Cornell Data Science',
      teams: [
        {
          title: "Intelligent Systems",
          to: "/teams/intsys"
        },
        {
          title: "Data Engineering",
          to: "/teams/de"
        },
        {
          title: "Insights",
          to: "/teams/insights"
        },
        {
          title: "Algorithm Trading",
          to: "/teams/algo"
        },
        {
          title: "Education",
          to: "/teams/edu"
        }
      ],
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
