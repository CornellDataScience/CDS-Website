<template>
    <Team title="Data Science" v-bind:leads="data.teamleads" v-bind:advisors="data.advisors" v-bind:members="data.members">
    </Team>
</template>

<script>
import data from '~/assets/json/teams/ds.json';
export default {
    name: 'Data Science',
    head: {
        title: 'Data Science'
    },
    data() {
        return {
            data: data
        }
    }
}
</script>

