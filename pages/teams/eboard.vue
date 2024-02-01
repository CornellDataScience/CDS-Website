<template>
    <div class="px-4">
        <p class="text-h3 font-weight-medium text-uppercase text-center mt-16">
            {{ data.title }}
        </p>
        <div class="mx-md-16 my-8">
            <v-row justify="center" class="mx-md-16">
                <v-col cols="12" sm="4" md="3" xl="2" v-for="member in data.people" v-bind:key="member.name"
                    class="text-center">
                    <v-card class="rounded-xl mx-auto" height="300" width="200">
                        <v-img :src="getImagePath(member.image)" class="fill-height"></v-img>
                    </v-card>
                    <b>
                        <p class="mt-2">{{ member.title }}</p>
                    </b>
                    <p class="mt-2">{{ member.name }}</p>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import data from '~/assets/json/teams/eboard.json';
export default {
    name: 'Executive Board',
    head: {
        title: 'Executive Board'
    },
    data() {
        return {
            data: data
        }
    },
    methods: {
      getImagePath(imageName) {
        try { 
          return require(`../../assets/img/headshots/${imageName}`);
        } catch {
          return require(`../../assets/img/headshots/default.jpg`);
        }
      }
    }
}
</script>

