<template>
    <div class="px-4">
        <div class="mx-md-16 my-8">  
            <div class="text-h3 my-8 text-center font-weight-medium text--uppercase primary--text">
                Alumni
            </div>
            <v-row justify="center" class="mx-md-16">
                <v-col cols="12" sm="4" md="3" xl="2" v-for="alumnus in alumni" v-bind:key="alumnus.name" class="text-center">
                    <v-card class="rounded-xl mx-auto" height="200" width="200">
                    <v-img :src="require(`../assets/img/headshots/${alumnus.image}`)" class="fill-height" max-height="200"></v-img>
                    </v-card>
                    <p class="mt-2">
                        {{alumnus.name}}
                        <span v-if="alumnus.gradYear || alumnus.subteam">
                            (<span v-if="alumnus.subteam">{{ alumnus.subteam }}</span><span v-if="alumnus.gradYear && alumnus.subteam"> </span><span v-if="alumnus.gradYear">'{{ alumnus.gradYear }}</span>)
                        </span>
                    </p>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import alumni from '~/assets/json/alumni.json';
export default {
    name: 'Alumni',
    head: {
        title: 'Alumni'
    },
    data() {
        return {
            alumni: alumni
        }
    }
}
</script>