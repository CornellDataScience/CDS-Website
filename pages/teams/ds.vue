<template>
    <Team v-bind:title="teamName" v-bind:leads="ds.teamleads" v-bind:advisors="ds.advisors" v-bind:members="ds.members" />
</template>

<script setup lang="ts">
import ds from '~/assets/json/teams/ds.json';

const teamName = 'Data Science'
useHead({ title: teamName })
</script>
