<template>
  <Team v-bind:title="teamName" v-bind:leads="qf.teamleads" v-bind:advisors="qf.advisors" v-bind:members="qf.members" />
</template>

<script setup lang="ts">
import qf from '~/assets/json/teams/qf.json';

const teamName = qf.title
useHead({ title: teamName })
</script>
