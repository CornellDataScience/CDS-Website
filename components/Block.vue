<template>
  <v-row class="pa-4">
    <v-col cols="12" md="4">
      <a v-if="link" class="pb-4 flex-grow-0 text-h4 font-weight-medium primary--text text-decoration-none" :href="link">
        {{ title }} </a>
      <p v-else class="pb-4 flex-grow-0 text-h4 font-weight-medium primary--text text-decoration-none">
        <slot name="title"> {{ title }} </slot>
      </p>
      <slot name="leftContent" />
    </v-col>
    <v-col cols="12" md="8">
      <slot />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  link: String,
  alt: {
    type: Boolean,
    default: false
  }
})
</script>
