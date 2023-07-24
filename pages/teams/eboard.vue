<template>
  <div class="px-4">
    <p class="text-h3 font-weight-medium text-center mt-16">
      {{ eboard.title }}
    </p>
    <div class="mx-md-16 my-8">
      <v-row justify="center" class="mx-md-16">
        <v-col cols="12" sm="4" md="3" xl="2" v-for="member in eboard.people" v-bind:key="member.name"
          class="text-center">
          <v-card class="rounded-xl mx-auto" height="200" width="200">
            <v-img :src="member.image" class="fill-height" max-height="200"></v-img>
          </v-card>
          <b>
            <p class="mt-2">{{ member.title }}</p>
          </b>
          <p class="mt-2">{{ member.name }}</p>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import eboard from '~/assets/json/teams/eboard.json';

// workaround to get around broken of dynamic requires in Vue 3
// took me forever to figure out
// the getImgUrl is defined in `utils/helpers.ts`
eboard.people = eboard.people.map(person => ({ ...person, image: getImgUrl(`headshots/${person.image}`) }))

useHead({ title: 'Executive Board' })
</script>

