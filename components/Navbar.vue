<template>
  <v-app-bar>
    <!-- CDS Logo -->
    <NuxtLink to="/">
      <img contain src="/cds_logo.png" aspect-ratio="1" width="50px" class="mt-2 ml-3" />
    </NuxtLink>

    <v-spacer />

    <!-- Full Nav Bar -->
    <div class="hidden-sm-and-down">
      <v-menu open-on-hover bottom offset-y>
        <template v-slot:activator="{ props }">
          <v-btn variant="tonal" class="nav-btn mx-2 body-2 font-weight-bold" active-class="primary--text" :to="'/teams'"
            v-bind="props" nuxt>
            Teams
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in teams" :key="index">
            <v-list-item-title>
              <v-btn variant="plain" class="nav-btn mx-2 body-2 font-weight-bold" active-class="primary--text"
                v-bind:to="item.to" nuxt>
                {{ item.title }}
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn variant="plain" class="nav-btn mx-2 body-2 font-weight-bold" active-class="primary--text" href="/projects">
        Projects
      </v-btn>
      <v-btn variant="plain" class="nav-btn mx-2 body-2 font-weight-bold" active-class="primary--text" :to="'/education'"
        nuxt>
        Education
      </v-btn>
      <v-btn variant="plain" class="nav-btn mx-2 body-2 font-weight-bold" active-class="primary--text"
        href="https://cornelldatascience.github.io/education-blogs/">
        Blog
      </v-btn>
      <v-btn variant="plain" class="nav-btn mx-2 body-2 font-weight-bold" active-class="primary--text" href="/contact">
        Contact
      </v-btn>
      <v-btn variant="tonal" id="applybtn" class="nav-btn mx-2 navColor white--text body-2 font-weight-bold rounded-xl"
        to="/recruitment" nuxt>
        Apply
      </v-btn>
    </div>

    <!-- Mobile Nav Bar -->
    <v-menu open-on-click bottom offset-y>
      <template v-slot:activator="{ props }">
        <v-btn plain class="hidden-md-and-up nav-btn body-2 font-weight-medium" active-class="primary--text"
          v-bind="props">
          <v-icon large>mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-list nav>
        <v-list-item>
          <v-menu offset-y>
            <template v-slot:activator="{ props }">
              <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" v-bind="props">
                Teams
              </v-btn>
            </template>

            <v-list nav>
              <v-list-item>
                <v-list-item-title>
                  <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text"
                    v-bind:to="'/teams'" nuxt>
                    Overview
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
              <v-list-item v-for="(item, index) in teams" :key="index">
                <v-list-item-title>
                  <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text"
                    v-bind:to="item.to" nuxt>
                    {{ item.title }}
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" href="/projects">
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
          <v-btn id="applybtn" plain x-small class="nav-btn navColor body-2 font-weight-bold" to="/recruitment" nuxt>
            Apply
          </v-btn>
        </v-list-item>

      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
const teams = [
  {
    title: 'Executive Board',
    to: '/teams/eboard'
  },
  {
    title: 'Data Science',
    to: '/teams/ds'
  },
  {
    title: 'Data Engineering',
    to: '/teams/de'
  },
  {
    title: 'Machine Learning Engineering',
    to: '/teams/mle'
  },
  {
    title: 'Quantitative Finance',
    to: '/teams/qf'
  }
]
// const hover = false
</script>

<style scoped>
#applybtn {
  background-color: #b39ddb;
  /* color: white; */
}
</style>