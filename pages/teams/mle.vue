<template>
    <Team title="Machine Learning Engineering" v-bind:leads="data.teamleads" v-bind:advisors="data.advisors"
        v-bind:members="data.members"></Team>
</template>

<script>
import data from '~/assets/json/teams/mle.json';
export default {
    name: 'Machine Learning Engineering',
    head: {
        title: 'Machine Learning Engineering'
    },
    data() {
        return {
            data: data
        }
    }
}
</script>

