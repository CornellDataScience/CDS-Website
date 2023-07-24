<template>
  <div>
    <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
      {{ teams.title }}
    </p>
    <div class="mx-md-16 pa-8 my-8">
      <p class="body-1 font-weight-light mx-md-8">
        {{ teams.description }}
      </p>
      <p class="text-h4 primary--text font-weight-normal text-uppercase text-center mt-8">
        {{ teams.subtitle }}
      </p>
      <p class="body-1 font-weight-light mx-md-8 pb-4">
        {{ teams.subdescription }}
      </p>
      <div v-for="item in teams.info" v-bind:key="item.name">
        <v-divider thickness="1" class="my-6" />
        <Block v-bind:title="item.name" v-bind:link="item.link">
          <p v-html="item.description"></p>
        </Block>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import teams from '~/assets/json/teams.json';

useHead({ title: 'Teams' })
</script>

