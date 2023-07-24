<template>
    <Team v-bind:title="teamName" v-bind:leads="mle.teamleads" v-bind:advisors="mle.advisors"
        v-bind:members="mle.members" />
</template>

<script setup lang="ts">
import mle from '~/assets/json/teams/mle.json';

const teamName = 'Machine Learning Engineering'
useHead({ title: teamName })
</script>
