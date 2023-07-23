<template>
  <!-- Do I need to use props in v-bind here? The API changed in Vue 3 from one variable to two. There's also another place where I did this change -->
  <v-hover v-slot:default="{ isHovering, props }">
    <v-card rounded v-if="link" :href="link" :elevation="isHovering ? 12 : 2" class="rounded-xl pa-md-4 my-8">
      <slot></slot>
    </v-card>
    <v-card rounded v-else :elevation="isHovering ? 12 : 2" class="rounded-xl pa-md-4 my-8">
      <slot></slot>
    </v-card>
  </v-hover>
</template>

<script setup lang="ts">
defineProps({ link: String })
</script>
