<template>
  <v-app>
    <Navbar></Navbar>

    <v-main>
      <!-- <v-container> -->
      <Nuxt />
      <!-- </v-container> -->
    </v-main>

    <v-footer class="justify-center py-5 mt-5">
      <div>
        <v-row class="justify-center" height="20px">
          <v-col cols="1">
            <v-btn icon href="mailto:cornelldatascience@gmail.com">
              <font-awesome-icon icon="envelope" size="lg" />
            </v-btn>
          </v-col>

          <v-col cols="1">
            <v-btn icon href="https://www.instagram.com/cornelldatascience/" target="_blank">
              <font-awesome-icon :icon="faInstagram" size="lg" />
            </v-btn>
          </v-col>

          <v-col cols="1">
            <v-btn icon href="https://www.facebook.com/CornellDataScience/" target="_blank">
              <font-awesome-icon :icon="faFacebook" size="lg" />
            </v-btn>
          </v-col>

          <v-col cols="1">
            <v-btn icon href="https://github.com/CornellDataScience/" target="_blank">
              <font-awesome-icon :icon="faGithub" size="lg" />
            </v-btn>
          </v-col>

        </v-row>
        <br>
        <span class="subtitle-1 text-center">
          &copy {{ new Date().getFullYear() }} Cornell Data Science.
        </span>
        <span class="text-center">
          This organization is a registered student organization of Cornell University.
        </span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default {
  components: {
    // SvgIcon
  },
  computed: {
    faInstagram() {
      return faInstagram
    },
    faFacebook() {
      return faFacebook
    },
    faGithub() {
      return faGithub
    }
  },
  data() {
    return {
      hover: false,
      title: 'Cornell Data Science',
      teams: [
        {
          title: "Executive Board",
          to: "/teams/eboard"
        },
        {
          title: "Machine Learning Engineering",
          to: "/teams/mle"
        },
        {
          title: "Data Engineering",
          to: "/teams/de"
        },
        {
          title: "Data Science",
          to: "/teams/ds"
        },
        {
          title: "Quantitative Finance",
          to: "/teams/qf"
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
