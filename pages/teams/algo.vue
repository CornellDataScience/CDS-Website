<template>
    <Team
    title="Algorithmic Trading"
    v-bind:leads="data.teamleads"
    v-bind:advisors="data.advisors"
    v-bind:about="data.about"
    v-bind:current="data.current"
    v-bind:past="data.past"
    v-bind:members="data.members"
    ></Team> 
</template>

<script>
import data from '~/assets/json/algo.json';
export default {
    data() {
        return {
            data: data
        }   
    }
}
</script>
