<template>
    <Team
    title="Data Engineering"
    v-bind:leads="data.teamleads"
    v-bind:advisor="data.advisor"
    v-bind:about="data.about"
    v-bind:current="data.current"
    v-bind:past="data.past"
    v-bind:members="data.members"
    ></Team> 
</template>

<script>
import data from '~/assets/json/de.json';
export default {
    data() {
        return {
            data: data
        }   
    }
}
</script>

