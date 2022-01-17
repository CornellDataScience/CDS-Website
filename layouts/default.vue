<template>
  <v-app >
    <Navbar></Navbar>

    <v-main>
      <!-- <v-container> -->
        <Nuxt />
      <!-- </v-container> -->
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
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
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
