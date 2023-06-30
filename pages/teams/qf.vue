<template>
    <Team title="Quantitative Finance" v-bind:leads="data.teamleads" v-bind:advisors="data.advisors"
        v-bind:members="data.members"></Team>
</template>

<script>
import data from '~/assets/json/teams/qf.json';
export default {
    name: 'Quantitative Finance',
    head: {
        title: 'Quantitative Finance'
    },
    data() {
        return {
            data: data
        }
    }
}
</script>

