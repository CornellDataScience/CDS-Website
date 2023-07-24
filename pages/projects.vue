<template>
  <div>
    <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
      {{ projects.title }}
    </p>
    <div class="mx-16 my-8">
      <v-row>
        <v-col cols="12" sm="6" md="4" height="100%" v-for="item in projects.cdsproj" v-bind:key="item.name"
          justify="center">
          <v-hover v-slot:default="{ props, isHovering }">
            <v-card shaped class="rounded-xl py-4 d-flex flex-column" :href="item.github" height="100%"
              :elevation="isHovering ? 12 : 2">
              <v-card-title class="text-h5 text-center font-weight-medium mx-md-8 justify-center primary--text"> {{
                item.name }}</v-card-title>
              <v-card-text class="font-weight-small">
                {{ item.description }}
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>

      <v-divider thickness="1" class="mt-8" />
      <a style="text-decoration: none; color: inherit;" :href="projects.github">
        <FloatingCard>
          <Block title="CDS Github">
            <template v-slot:leftContent>
              <p>{{ projects.github_desc }}</p>
            </template>
            <v-img aspect-ratio="8" class="rounded-xl" :src="githubPageUrl"></v-img>
          </Block>
        </FloatingCard>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from '~/assets/json/projects.json';

const githubPageUrl = getImgUrl('github_page.png')

useHead({ title: 'Projects' })
</script>