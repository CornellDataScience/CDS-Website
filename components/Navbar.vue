<style>
. {
  font-family: "Roboto";
  src: local("Roboto"),   url(../assets/fonts/Roboto/Roboto-Regular.ttf) format("truetype");}
</style>

<template>
    <v-app-bar>
      <NuxtLink to="/">
        <img contain src="cds_logo.png" aspect-ratio="1" width="50px" align="center" />
      </NuxtLink>
      <NuxtLink to="/" style="text-decoration:none">
        <!-- <v-toolbar-title v-text="title" class="justify-center text-p font-weight-small text-uppercase" /> -->
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
                <v-btn plain class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" v-bind:to="item.to" v-on="on" nuxt>
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
        <v-btn plain small class="nav-btn mx-2 body-2 font-weight-medium" active-class="primary--text" href="https://cornell-data.medium.com/">
          Blog
        </v-btn>
        <v-btn text small class="nav-btn mx-2 navColor white--text body-2 font-weight-medium rounded-xl" to="/contact" nuxt>
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
                    <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" v-bind:to="'/teams'" v-on="on" nuxt>
                      Overview
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
                <v-list-item v-for="(item, index) in teams" :key="index">
                  <v-list-item-title>
                    <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" v-bind:to="item.to" v-on="on" nuxt>
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
            <v-btn plain x-small class="nav-btn body-2 font-weight-medium" active-class="primary--text" href="https://cornell-data.medium.com/">
              Blog
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn text x-small class="nav-btn navColor body-2 font-weight-medium" to="/contact" nuxt>
              Contact
            </v-btn>
          </v-list-item>

        </v-list>
      </v-menu>
    </v-app-bar>
</template>

<script>
export default ({
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
            title: "Algorithmic Trading",
            to: "/teams/algo"
            },
            {
            title: "Education",
            to: "/teams/edu"
            },
            {
            title: "Cross Team Projects",
            to: "/teams/crossteam"
            }
        ],
        }
    }
})
</script>
