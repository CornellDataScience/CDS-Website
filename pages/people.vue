<template>
    <div>
    <v-img :src="require(`../assets/img/Gates.jpg`)" :lazy-src="require(`../assets/img/Gates.jpg`)" 
    gradient="rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)" :aspect-ratio="3" class="d-flex align-center mb-4">
        <p class="mx-8 d-flex justify-center text-h2 white--text font-weight-medium text-uppercase title">
            People
        </p>
    </v-img>
    <div v-for="group in special" v-bind:key="group.title">
        <div class="text-h3 my-8 text-center font-weight-medium text--uppercase primary--text">
        {{group.title}}
        </div>
        <!-- <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(10rem, 10rem)); align-items: center;"
        class="center justify-center mx-16"> -->
        <v-row justify="center" class="mx-16">
          <v-col cols="3" v-for="person in group.people" v-bind:key="person.name" class="text-center">
            <b>{{person.name}}</b>
            <p>{{person.title}}</p>
          </v-col>
        </v-row>
    </div>
    <div class="text-h3 my-8 text-center font-weight-medium text--uppercase primary--text">
      {{main.title}}
    </div>
    <div v-for="group in main.teams" v-bind:key="group.subtitle">
        <div class="text-h2 my-4 text-center font-weight-medium text--uppercase">
          {{group.subtitle}}
        </div>
        <v-row justify="center" class="mx-16">
          <v-col cols="3" v-for="person in group.people" v-bind:key="person.name" class="text-center">
            <p>{{person.name}}</p>
            <v-img :src="require(`../assets/img/headshots/${person.image}`)" max-height="200px" contain></v-img>
          </v-col>
        </v-row>
    </div>
    </div>
</template>

<script>
    import data from '~/assets/json/people.json';
    export default {
        data () {
            return {
                special: data.special,
                main: data.main
            }
        }
    }
</script>
