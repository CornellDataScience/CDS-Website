<template>
  <v-app-bar>
    <NuxtLink to="/">
      <img contain src="/cds_logo.png" aspect-ratio="1" width="50px" align="center" />
    </NuxtLink>
    <NuxtLink to="/" style="text-decoration:none">
      <!-- <v-toolbar-title v-text="title" class="justify-center text-p font-weight-small text-uppercase" /> -->
    </NuxtLink>
    <v-spacer />

    <!-- Full Nav Bar -->
    <div class="hidden-sm-and-down">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="'/teams'"
            v-on="on" nuxt>
            Teams
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in teams" :key="index">
            <v-list-item-title>
              <v-btn plain class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" v-bind:to="item.to"
                v-on="on" nuxt>
                {{ item.title }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" to="/projects">
        Projects
      </v-btn>
      <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" :to="'/education'"
        nuxt>
        Education
      </v-btn>
      <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text"
        href="https://cornelldatascience.github.io/education-blogs/">
        Blog
      </v-btn>
      <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" to="/alumni">
        Alumni
      </v-btn>
      <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" to="/contact">
        Contact
      </v-btn>
      <v-btn text small class="nav-btn mx-2 navColor white--text body-2 font-weight-medium rounded-xl" to="/recruitment"
        nuxt>
        Apply
      </v-btn>
    </div>

    <!-- Mobile Nav Bar -->
    <v-menu open-on-click bottom offset-y>
      <template v-slot:activator="{ on }">
        <v-btn plain class="hidden-md-and-up nav-btn body-2 font-weight-medium" active-class="primary--text" v-on="on">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list nav>
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
                  <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text"
                    v-bind:to="'/teams'" v-on="on" nuxt>
                    Overview
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-for="(item, index) in teams" :key="index">
                <v-list-item-title>
                  <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text"
                    v-bind:to="item.to" v-on="on" nuxt>
                    {{ item.title }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" to="/projects">
            Projects
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" :to="'/education'"
            nuxt>
            Education
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text"
            href="https://cornelldatascience.github.io/education-blogs/">
            Blog
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" :to="'/alumni'"
            nuxt>
            Alumni
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text x-small class="nav-btn navColor body-2 font-weight-medium" to="/recruitment" nuxt>
            Apply
          </v-btn>
        </v-list-item>

      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default ({
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
          title: "Data Science",
          to: "/teams/ds"
        },
        {
          title: "Data Engineering",
          to: "/teams/de"
        },
        {
          title: "Machine Learning Engineering",
          to: "/teams/mle"
        },
        {
          title: "Quantitative Finance",
          to: "/teams/qf"
        }
      ],
    }
  }
})
</script>
