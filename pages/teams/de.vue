<template>
  <!-- Why are we passing in each field of a team instead of the whole object? Refactor later -->
  <Team v-bind:title="teamName" v-bind:leads="de.teamleads" v-bind:advisors="de.advisors" v-bind:members="de.members" />
</template>

<script setup lang="ts">
import de from '~/assets/json/teams/de.json';

// Why is this hardcoded in the Vue page? We should move team name to the JSON files
const teamName = 'Data Engineering'

useHead({ title: teamName })
</script>
