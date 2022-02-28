<template>
    <v-hover v-slot:default="{ hover }">
      <v-card rounded v-if="link" :href="link" :elevation="hover ? 12 : 2" class="rounded-xl pa-md-4 my-8">
        <slot></slot>
      </v-card>
      <v-card rounded v-else :elevation="hover ? 12 : 2" class="rounded-xl pa-md-4 my-8">
        <slot></slot>
      </v-card>
    </v-hover>
</template>

<script>
    export default {
        props: {
           link: String
        }
    }
</script>
