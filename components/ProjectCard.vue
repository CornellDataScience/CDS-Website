<template>
<v-hover v-slot:default="{ hover }">
  <v-card :elevation="hover ? 8 : 2" class="mb-4 pa-4 rounded-xl font-weight-medium">
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>{{text}}</v-card-text>
      <v-card-action v-if="link">
        <v-btn plain text :href="link" color="primary" >Learn More</v-btn>
      </v-card-action>
      <!--<a v-bind:href="proj.link" class="secondary--text text-decoration-none">{{ proj.title }}</a>-->
  </v-card>
</v-hover>
</template>


<script>
    export default {
        props: {
            title: String,
            text: String,
            link: String
        }
    }
</script>
