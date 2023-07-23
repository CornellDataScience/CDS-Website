<template>
  <v-footer class="justify-center py-5 mt-5">
    <div>
      <!-- Contact icons -->
      <v-row class="justify-center" height="20px">
        <v-col cols="3">
          <v-btn icon href="mailto:cornelldatascience@gmail.com">
            <font-awesome-icon icon="envelope" size="lg" />
          </v-btn>
        </v-col>

        <v-col cols="3">
          <v-btn icon href="https://www.instagram.com/cornelldatascience/" target="_blank">
            <font-awesome-icon icon="fab fa-instagram" size="lg" />
          </v-btn>
        </v-col>

        <v-col cols="3">
          <v-btn icon href="https://www.facebook.com/CornellDataScience/" target="_blank">
            <font-awesome-icon icon="fab fa-facebook" size="lg" />
          </v-btn>
        </v-col>

        <v-col cols="3">
          <v-btn icon href="https://github.com/CornellDataScience/" target="_blank">
            <font-awesome-icon icon="fab fa-github" size="lg" />
          </v-btn>
        </v-col>
      </v-row>

      <!-- Copyright Statement -->
      <v-row class="justify-center mt-6" height="20px">
        Cornell Data Science, &copy; {{ new Date().getFullYear() }}
      </v-row>
    </div>
  </v-footer>
</template>