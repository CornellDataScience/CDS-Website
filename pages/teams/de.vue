<template>
    <Team
    title="Data Engineering"
    v-bind:leads="data.teamleads"
    v-bind:advisors="data.advisors"
    v-bind:members="data.members"
    ></Team> 
</template>

<script>
import data from '~/assets/json/teams/de.json';
export default {
    data() {
        return {
            data: data
        }   
    }
}
</script>

